import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const HTMLCODE=
               `<div *ngFor="let sezione of sezioni ; let i = index">
                  <mat-toolbar class="contenente">{{sezione.titolo}}
                    <span class="example-spacer"></span>
                    <button mat-button (click)="openList(i)">
                      <mat-icon>details</mat-icon>
                    </button>
                  </mat-toolbar>
                  <div class="contenuto" style="margin-left:5%" *ngFor="let competenza of  sezione.competenze ; let j = index" [@onChangeDetailContent]="display[i]">
                    <button mat-button (click)="openDetail(i,j)">
                      <div class="contenente">
                        <strong>{{competenza.competenza}}</strong>
                      </div>
                    </button>
                    <div class="contenutoX" style="margin-right:15%;" [@onChangeDetailContent]="displayNested[i][j]">
                        {{competenza.descrizione}}
                    </div>
                  </div>
                </div>`;
const TSCODE = 
  `@Component({
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
    htmlCode = HTMLCODE;
    constructor(private http: HttpClient) {
      this.loading = true;
      this.getJSON().subscribe(data => {
        this.sezioni = data;
        this.loading = false;
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
  }`;
const CSSCODE = 
 `@import '~@angular/material/theming';
  @mixin tenda-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  .contenente {
    position: relative;
    min-height: 100px;
    max-height: 100px;
    padding: 0;
    margin: 0;
    border: 0;
  }
  .contenuto,
  .contenutoX {
    position: relative;
    padding: 0;
    overflow-y: hidden;
    border: 0;
  }
}`;
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
  htmlCode = HTMLCODE;
  tsCode = TSCODE;
  cssCode = CSSCODE;
  constructor(private http: HttpClient) {
    this.loading = true;
    this.getJSON().subscribe(data => {
      this.sezioni = data;
      this.loading = false;
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
