import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService'
import { error } from 'util';
import { Router } from "@angular/router";
import { MatDialog, MatDialogActions } from '@angular/material';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-tabella-misure',
  templateUrl: './tabella-misure.component.html',
  styleUrls: ['./tabella-misure.component.scss'],
  animations: [
    trigger('onChangeDetailContent', [
      state('show', style({

      })),
      state('hide', style({
        height: 0,
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-out')),
    ])
  ]
})
export class TabellaMisureComponent implements OnInit {
  misure = JSON.parse(sessionStorage.getItem('listaMisure'));
  root = "http://localhost:53236/";
  loading = false;
  display: string[] = [];
  buttonListDisplay = 'none';
  constructor(private service: HttpService,
    public dialog: MatDialog,
    public router: Router,
  ) {
    for (let el in this.misure) {
      this.display.push('hide');
    }
  }
  openDialog(misura) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '350px',
      data: { res: misura.MisuraIn },
    });
    dialogRef.componentInstance.onAccept.subscribe(result => {
      let a = this.service.delete(this.root + "TipoQuantita/DeleteQta/", misura.Id)
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
  deleteMisura(misura: any) {
    this.openDialog(misura);
  }
  openList(index: number) {
    if (this.display[index] === 'hide') {
      this.display[index] = 'show';
      
    } else {
      this.display[index] = 'hide';
      
    }
  }
  saveSession() {
    this.loading = true;
    this.service.getAll(this.root + "TipoQuantita/GetAllQtaDipendenze")
      .subscribe(
      data => {
        sessionStorage.setItem('listaMisure', JSON.stringify(data));
        this.misure = JSON.parse(sessionStorage.getItem('listaMisure'));
        this.router.navigate(['listaMisure']);
        this.loading = false;
      },
      error => { },
      () => { }
      )
  }
  ngOnInit() { }

}
