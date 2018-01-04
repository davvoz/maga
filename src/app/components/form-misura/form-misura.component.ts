import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../dialogs/my-dialog/my-dialog.component';
@Component({
  selector: 'app-form-misura',
  templateUrl: './form-misura.component.html',
  styleUrls: ['./form-misura.component.css']
})
export class FormMisuraComponent implements OnInit {
  nome: string;
  root = "http://localhost:53236/";
  constructor(
    private service: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      height: '350px',
      data: { res: "Misura salvata su database" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  createMisura() {
    this.service.create(
      {
        Id : 0,
        MisuraIn : this.nome
      },
      this.root + "TipoQuantita/InsertQta")
      .subscribe(
        data =>{
          this.saveSession();
        },
        error =>{},
        ()=>{}
      );
  }
  saveSession(){
    this.service.getAll(this.root + "TipoQuantita/GetAllQta")
    .subscribe(
      data =>{sessionStorage.setItem('listaMisure',JSON.stringify(data))},
      error => {},
      ()=>{}
    ) 
  }
}
