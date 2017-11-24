import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() numeroMagazzini : number;
  @Input() numeroProdotti : number;
  @Input() numeroMisure : number;
  @Input() numeroGiacenze : number;
 
  ngOnInit() {
    
  }
}
