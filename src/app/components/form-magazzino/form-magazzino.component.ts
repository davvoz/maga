import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../dialogs/my-dialog/my-dialog.component';

@Component({
  selector: 'app-form-magazzino',
  templateUrl: './form-magazzino.component.html',
  styleUrls: ['./form-magazzino.component.css']
})
export class FormMagazzinoComponent implements OnInit {

  nome: string;
  locazione:string;
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
      data: { res: "Magazzino salvato su database" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  createMagazzino() {
    this.service.create(
      {
        Id : 0,
        Nome : this.nome,
        Locazione : this.locazione
      },
      this.root + "Magazzino/InsertMagazzino")
      .subscribe(
        data =>{
          this.saveSession();
        },
        error =>{},
        ()=>{}
      );
  }
  saveSession(){
    this.service.getAll(this.root + "Magazzino/GetMagazzini")
    .subscribe(
      data =>{sessionStorage.setItem('listaMagazzini',JSON.stringify(data))},
      error => {},
      ()=>{}
    ) 
  }

}
