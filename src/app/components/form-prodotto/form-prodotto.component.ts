import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';
import { MatSnackBar ,MatDialog} from '@angular/material';
import { MyDialogComponent } from'../dialogs/my-dialog/my-dialog.component';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {
  nome: string;
  descrizione:string;
  misure = JSON.parse(sessionStorage.getItem('listaMisure'));
  misura;
  immagine;
  img64 = "../../../assets/img/defImg.png";
  imgSrc: any;
  root = "http://localhost:53236/";
  constructor(
    private service: HttpService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }
  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      height: '350px',
      data:{res :"Prodotto salvato su database"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  onRemoved(e) {
    this.openSnackBar('immagine rimossa', typeof this.immagine);
    this.img64 = "../../../assets/img/defImg.png";
  }
  createProdotto() {
    this.service.create(
      {
        ProdottoNome : this.nome,
        TipologiaQta : this.misura.MisuraIn,
        Immagine : this.imgSrc,
        Descrizione : this.descrizione
      },
      this.root + "ProdottoQta/InsertProdottoQta")
      .subscribe(
        data =>{
          this.saveSession();
        },
        error =>{},
        ()=>{}
      );
  }
  saveSession(){
    this.service.getAll(this.root + "ProdottoQta/GetAllProdottiQta")
    .subscribe(
      data =>{sessionStorage.setItem('listaProdotti',JSON.stringify(data))},
      error => {},
      ()=>{}
    ) 
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
    this.imgSrc = btoa(binaryString);

    this.openSnackBar('immagine caricata', typeof this.imgSrc);
  }


}

