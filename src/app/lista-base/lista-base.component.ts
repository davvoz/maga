import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource ,MatSort} from '@angular/material';
import { compile, compileFromFile } from 'json-schema-to-typescript';
import { Data } from '../providers/data/data';
@Component({
  selector: 'app-lista-base',
  templateUrl: './lista-base.component.html',
  styleUrls: ['./lista-base.component.css']
})

export class ListaBaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  imgSource;
  tipologiaSource;
  headers: any[];
  dataSourceModel ;
  objects: any[] = [];
  pagesize=5;
  
  constructor(
    private data: Data,
    private dateImg : Data,
    private dateTipologia : Data
  ){
    this.dataSource = this.data.storage;
    this.imgSource = this.dateImg.storage2;
    this.tipologiaSource = this.dateTipologia.storage3;
    this.headers = Object.getOwnPropertyNames(this.dataSource[0]);
    for (let i = 0; i < this.dataSource.length; i++) {
      this.objects[i] = new Array(Object.values(this.dataSource[i]).length);
      for (let j = 0; j < this.headers.length; j++) {
        this.objects[i][j] = new Array(Object.values(this.dataSource[i]).length);
        this.objects[i][j] = Object.values(this.dataSource[i])[j];
      }
    }
    this.dataSourceModel = new MatTableDataSource<any[][]>(this.objects);
    this.dataSourceModel.paginator = this.paginator;
    //this.pagesize=5;
   
    
   }
  ngOnInit() {
    
   // this.paginator.nextPage;
    
  }
  
  }


