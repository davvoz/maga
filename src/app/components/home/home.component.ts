import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';
import { Prodotto } from "../../interfaces/interfaces";
import { MatSnackBar, MatDialog, MatDialogActions } from '@angular/material';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  root = "http://localhost:53236/";
  listaModel = JSON.parse(sessionStorage.getItem('listaProdotti'));
  miniatureArray=[{big:"C",small:"reate"},{big:"R",small:"ead"},{big:"U",small:"pdate"},{big:"D",small:"elete"}];
  constructor(
    private service: HttpService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar
  ) {

  }
  ngOnInit() {

  }

  openDialog(prod) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '350px',
      data: { res: prod.ProdottoNome },
    });
    dialogRef.componentInstance.onAccept.subscribe(result => {
      let a = this.service.delete(this.root + "ProdottoQta/DeleteProdottoQta/", prod.Id)
        .subscribe(
        data => {
          this.saveSession();
        },
        error => { },
        () => { }
        );
    })
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${sessionStorage.getItem('listaProdotti')}`);
    });
  }
  modify(prod: Prodotto) {
    this.loading = true;
    let a = this.service.getAll(this.root + "TipoQuantita/GetAllQta")
      .subscribe(data => {
        sessionStorage.setItem('listaMisure', JSON.stringify(data));
        sessionStorage.setItem('prodottoUpdate', JSON.stringify(prod));
        this.router.navigate(['updateProdotto']);
        this.loading = false;
      },
      err => console.log(err + " Failed to load misura"),
      () => console.log('done loading misura'));
  }
  delete(prod: Prodotto) {
    this.openDialog(prod);
  }
  saveSession() {
    this.loading = true;
    this.service.getAll(this.root + "ProdottoQta/GetAllProdottiQta")
      .subscribe(
      data => {
        sessionStorage.setItem('listaProdotti', JSON.stringify(data));
        this.listaModel = JSON.parse(sessionStorage.getItem('listaProdotti'));
        this.router.navigate(['home']);
        this.loading = false;
      },
      error => { },
      () => { }
      )
  }
}
