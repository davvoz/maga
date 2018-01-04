import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { concat } from 'rxjs/observable/concat';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  models: any = [];
  parametri: any[];
  selected: string;
  img64 = "./assets/img/defImg.png";
  modelContainer = [];
  list = [];
  modelList = [];

  constructor(
    public snackBar: MatSnackBar
  ) {
    this.list = JSON.parse(sessionStorage.getItem('command'));
    let a = JSON.parse(sessionStorage.getItem('temp'));
    this.parametri = JSON.parse(sessionStorage.getItem(JSON.parse(sessionStorage.getItem('temp')).path));
    console.log(this.parametri);
    for (let i = 0; i < this.parametri.length; i++) {
      this.models[i] = this.parametri[i].etichetta;
      console.log(this.models[i]);
    }
    this.list.push(this.models);
  }
  ngOnInit() {


  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }

  action() {
    this.openSnackBar('Grazie di avere aggiunto una/un '+this.models[0],this.models);
    let a = this.models.shift();
    this.list.push(this.models);
    sessionStorage.setItem(a, JSON.stringify(this.list))
  }
  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.img64 = 'data:image/PNG;base64,' + btoa(binaryString);
    console.log(btoa(binaryString));
  }
}

