import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularVersion} from '../../classes/angularVersion';
import { MaterialVersion} from '../../classes/materialVersion';
import {YouTubePlayer} from 'youtube-player';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('onChangeDetailContent', [
      state('show', style({
      })),
      state('hide', style({
        height: 0,
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-out')),
    ]),
    trigger('onChangeDetailContentNested', [
      state('show', style({
      })),
      state('hide', style({
        height: 0,
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-out')),
    ])
  ]
})

export class PresentationComponent implements OnInit {
  displayNested = [['hide', 'hide', 'hide', 'hide'], ['hide', 'hide', 'hide', 'hide'], ['hide', 'hide', 'hide', 'hide', 'hide', 'hide']];
  display: string[] = ['hide', 'hide', 'hide', 'hide'];
  sezioni;
  loading = false;
  ngVersion : AngularVersion = new AngularVersion;
  matVersion : MaterialVersion = new MaterialVersion;
  ngM = this.ngVersion.version;
  matM = this.matVersion.version;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.sezioni = data;  
    });  
  }
  
  getJSON(): Observable<any> {
    return this.http.get("'../../../assets/JSON/competenze.JSON")
  }
  openList(index: number) {
    this.display[index] === 'hide' ?
      this.display[index] = 'show' :
      this.display[index] = 'hide';
  }
  openDetail(i: number, j: number) {
    this.displayNested[i][j] === 'hide' ?
      this.displayNested[i][j] = 'show' :
      this.displayNested[i][j] = 'hide';
  }
  ngOnInit() {
  }
}
