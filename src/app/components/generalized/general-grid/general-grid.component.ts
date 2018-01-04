import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-general-grid',
  templateUrl: './general-grid.component.html',
  styleUrls: ['./general-grid.component.css']
})
export class GeneralGridComponent implements OnInit {
  tabella = JSON.parse(sessionStorage.getItem(sessionStorage.getItem('typeOfEntity')));
  typeOfEntity = sessionStorage.getItem('typeOfEntity');
  tabellaModel = [];
  public static status: Subject<boolean> = new Subject();
  constructor() {
   
  }

  ngOnInit() {
    GeneralGridComponent.status.subscribe(res => {
      this.tabella = JSON.parse(sessionStorage.getItem(sessionStorage.getItem('typeOfEntity')));
    });
    switch (this.typeOfEntity) {
      case 'listaProdotti':
        for (let i = 0; i < this.tabella.length; i++) {
          this.tabellaModel.push(this.tabella[i].ProdottoNome);
        }
        break;
      case 'listaMagazzini':
      for (let i = 0; i < this.tabella.length; i++) {
        this.tabellaModel.push(this.tabella[i].Nome+","+this.tabella[i].Locazione);
      }
        break;
      case 'listaMisure':
        break;
      case 'listaGiacenze':
        break;
    }
  }



}
