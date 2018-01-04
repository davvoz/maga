import { Component, OnInit, Input } from '@angular/core';
import { Prodotto } from '../../interfaces/interfaces';
import { HttpService } from '../../services/httpService';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MyDialogComponent } from '../dialogs/my-dialog/my-dialog.component';
@Component({
  selector: 'app-form-update-prodotto',
  templateUrl: './form-update-prodotto.component.html',
  styleUrls: ['./form-update-prodotto.component.css']
})
export class FormUpdateProdottoComponent implements OnInit {
  prodotto = JSON.parse(sessionStorage.getItem('prodottoUpdate'))
  misure = JSON.parse(sessionStorage.getItem('listaMisure'));
  root = "http://localhost:53236/";
  prodottoChanged: Prodotto;
  loading = false;
  misuraChanged = false;
  nomeChanged = false;
  descrizioneChanged = false;
  nome = this.prodotto.ProdottoNome;
  misureModel: string[] = [];
  misura = this.prodotto.TipologiaQta;
  descrizione = this.prodotto.Descrizione;
  constructor( private service: HttpService , public dialog: MatDialog ) { }

  ngOnInit() {
    for (let i = 0; i < this.misure.length; i++) {
      this.misureModel.push(this.misure[i].MisuraIn);
    }
  }
  openDialog(message) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      height: '150px',
      width: '150px',
      data: { res: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getProdotti() {
    this.loading = true;
    this.service.getAll(this.root + "ProdottoQta/GetAllProdottiQta").subscribe(
      data => {
        sessionStorage.setItem('listaProdotti', JSON.stringify(data));
        this.loading = false;
      },
      err => console.log(err + " Failed to load prodotti"),
      () => console.log('done loading prodotti')
    );
  }
  evtMisura(event) {
    this.misura = event.value;
    this.misuraChanged = true;
  }

  updateProdotto() {
    let saved = false;
    !this.misuraChanged ? this.misura = this.prodotto.TipologiaQta : null;
    console.log( this.misuraChanged);
    this.prodottoChanged = {
      Id: this.prodotto.Id,
      Descrizione: this.descrizione,
      Immagine: this.prodotto.Immagine,
      ProdottoNome: this.nome,
      TipologiaQta: this.misura,
      TipologiaQtaId: 0
    }
    this.service.update(this.prodottoChanged, this.root + "ProdottoQta/UpdateProdottoQta")
      .subscribe(
      data => {
        this.saveSession();
      },
      err => {
        console.log(err + " Failed to save prodotto");
        this.openDialog('not saved')
      },
      () => {
        console.log('done save prodotto');
        this.openDialog('saved');
      });
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
    console.log(evt);
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
    this.prodotto.Immagine = btoa(binaryString);

  }
}
