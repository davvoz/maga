import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { compile, compileFromFile } from 'json-schema-to-typescript';


@Component({
  selector: 'app-lista-base',
  templateUrl: './lista-base.component.html',
  styleUrls: ['./lista-base.component.css']
})

export class ListaBaseComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  tipologiaSource;
  headers: any[];
  dataSourceModel;
  objects: any[] = [];
  displayedColumns = [];
  columns = [];
  pagesize = 5;
  fromHere;
  constructor(
  ) {
    this.fromHere = JSON.parse(sessionStorage.getItem('temp')).path;
    this.dataSource = JSON.parse(sessionStorage.getItem(this.fromHere));
    this.tipologiaSource = this.fromHere;
    this.headers = Object.getOwnPropertyNames(this.dataSource[0]);
    for (let i = 0; i < this.dataSource.length; i++) {
      this.objects[i] = new Array(Object.values(this.dataSource[i]).length);
      for (let j = 0; j < this.headers.length; j++) {
        this.objects[i][j] = new Array(Object.values(this.dataSource[i]).length);
        this.objects[i][j] = Object.values(this.dataSource[i])[j];
      }
    }
    this.pagesize = 5;
    this.dataSourceModel = new MatTableDataSource( this.objects);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSourceModel.paginator = this.paginator;
  }
  

}



