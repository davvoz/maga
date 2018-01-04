import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() bigOne: string;
  @Input() small: string;
  @Input() subtitle: string;
  @Input() fontSize: string;
  constructor() { }

  ngOnInit() {
  }

}
