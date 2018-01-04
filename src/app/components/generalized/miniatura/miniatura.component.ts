import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-miniatura',
  templateUrl: './miniatura.component.html',
  styleUrls: ['./miniatura.component.css']
})
export class MiniaturaComponent implements OnInit {

  @Input() bigOne: string;
  @Input() small: string;
  @Input() color: string;
  @Input() fontSize: string;

  constructor() { }

  ngOnInit() {
  }

}
