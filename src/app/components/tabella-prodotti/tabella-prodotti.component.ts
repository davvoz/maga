import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { Prodotto} from '../../interfaces/interfaces'
const PRODOTTI_DATA:Prodotto[] = JSON.parse(sessionStorage.getItem('listaProdotti')) ;
@Component({
  selector: 'app-tabella-prodotti',
  templateUrl: './tabella-prodotti.component.html',
  styleUrls: ['./tabella-prodotti.component.css']
})

export class TabellaProdottiComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor() { 
    
  }
  displayedColumns = ['Immagine','ProdottoNome', 'TipologiaQta','Descrizione'];
  dataSource = new MatTableDataSource<Prodotto>( JSON.parse(sessionStorage.getItem('listaProdotti')));
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


