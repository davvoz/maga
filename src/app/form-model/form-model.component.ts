import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'underscore';
import { Data } from '../providers/data/data';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  parametri: any[];
  selected: string;
  img64 = "./assets/img/defImg.png";
  

  constructor(
    private data: Data
  ) {

    this.parametri = this.data.storage;
     console.log(this.parametri);

  }
  ngOnInit() {

  }


  onBack(): void {

  }
  inserisceNelForm(elemento) {
    this.selected = elemento;
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

