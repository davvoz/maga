import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  models:any=[];
  parametri: any[];
  selected: string;
  img64 = "./assets/img/defImg.png";


  constructor(
  ) {
    let a = JSON.parse(sessionStorage.getItem('temp'));
    this.parametri = JSON.parse(sessionStorage.getItem(JSON.parse(sessionStorage.getItem('temp')).path));


  }
  ngOnInit() {
    this.createModel();
  }
  createModel(){
    let a = this.parametri.shift();
    
      for(let i = 0; i < this.parametri.length ; i++){
        
          this.models[i] = this.parametri[i].etichetta;
 
      }
    console.log(this.models);
  }
  action(){

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

