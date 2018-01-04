
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import {Magazzino} from '../../interfaces/interfaces'

@Component({
  selector: 'app-tabella-magazzini',
  templateUrl: './tabella-magazzini.component.html',
  styleUrls: ['./tabella-magazzini.component.css']
})
export class TabellaMagazziniComponent  {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }
  displayedColumns = ['Id','Nome', 'Locazione',];
  dataSource = new MatTableDataSource<Magazzino>(JSON.parse(sessionStorage.getItem('listaMagazzini')));
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

