import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpService } from './services/httpService';
import { Data } from './providers/data/data';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  // @HostListener('hashchanged', ['$event'])
  // onClick(e) {
  //   console.log(e+"dioporcoooooooo")
  // }
  title = 'app';
  tavolaChimicaDati = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }];;

  modelloFormPersona = [
    {

      'etichetta': "Persona",
      'tipoHtml': "none",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "none",
      'isAnImgFile': "none",
      'isADate': 'none'

    },
    {

      'etichetta': "Nome",
      'tipoHtml': "text",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'

    }, {

      'etichetta': "Cognome",
      'tipoHtml': "text",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'

    }, {

      'etichetta': "figli",
      'tipoHtml': "number",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'

    }
    , {

      'etichetta': "Data di nascita",
      'tipoHtml': "date",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "none",
      'isAnImgFile': "none",
      'isADate': 'block'

    }, {

      'etichetta': "Foto",
      'tipoHtml': "",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "none",
      'isAnImgFile': "block",
      'isADate': 'none'

    }];

  consoleMirror: any[] = [];
  root = "http://localhost:53236/";
  misure = [];
  magazzini = [];
  modelloFormScarpe = this.data.storage = [
    {
      'etichetta': "Scarpa",
      'tipoHtml': "none",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "none",
      'isAnImgFile': "none",
      'isADate': 'none'
    },
    {
      'etichetta': "Marca",
      'tipoHtml': "text",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'
    },
    {
      'etichetta': "Modello",
      'tipoHtml': "text",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'
    },
    {
      'etichetta': "Numero",
      'tipoHtml': "number",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'
    },
  ];
  historyNavigation = [];
  modeldata;
  modeldata2;
  modeldata3;
  constructor(
    private serviceProdotti: HttpService,
    private serviceMagazzino: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    public data: Data,
    public data2: Data,
    public data3: Data

  ) {
    
    this.consoleMirror.push(this.router.url);
 
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    switch (this.historyNavigation[this.historyNavigation.length]) {
      case "home":
        break;
      case "formProdotto":
        this.mostraInsertProduct("switch");
        break;
      case "formPersona":
        this.data.storage = this.modelloFormPersona;
        break;
      case "formScarpe":
        break;
      case "listaChimica":
        this.data.storage = this.tavolaChimicaDati;
        this.data3.storage3 = "tavola chimica";
        break;
      case "listaProdotti":
        this.getProdottiQta("switch");
        break;
      case "listaMagazzini":
        this.getMagazzini("switch");
        break;
    }
    this.historyNavigation.length > 0 ? this.historyNavigation = this.historyNavigation.slice(0, -1) : null;
  }
  ngOnInit(): void {
  }
  goHome() {

    this.router.navigate(['home']);
    this.historyNavigation.push('home');
  }
  mostraListaChimica() {
    this.data.storage = this.tavolaChimicaDati;
    this.data3.storage3 = "tavola chimica";
    this.modeldata =JSON.stringify( this.data.storage);
    this.modeldata3 =JSON.stringify( this.data3.storage3);
    this.router.navigate(['listaChimica']); +
      this.historyNavigation.push('listaChimica');
  }

  mostraInsertPersona() {
    this.data.storage = this.modelloFormPersona;
    this.modeldata =JSON.stringify( this.data.storage);
    this.router.navigate(['formPersona']);
    this.historyNavigation.push('formPersona');
  }

  getProdottiQta(from: string) {
    this.serviceProdotti.getAll(this.root + "ProdottoQta/GetAllProdottiQtaSimple").subscribe(
      data => {
        this.data.storage = data;
        this.data3.storage3 = "prodotti";
        this.modeldata =JSON.stringify( this.data.storage);
        this.modeldata3 =JSON.stringify( this.data3.storage3);
        from === 'menu' ? this.router.navigate(['listaProdotti']) : null;
        this.historyNavigation.push('listaProdotti');
      },
      err => console.error(err),
      () => console.log('done loading prodottiQTa')
    );
  }
  getMagazzini(from: string) {
    this.serviceMagazzino.getAll(this.root + "Magazzino/GetMagazzini").subscribe(
      data => {
        this.data.storage = data;
        this.data3.storage3 = "magazzini";
        this.modeldata =JSON.stringify( this.data.storage);
        this.modeldata3 =JSON.stringify( this.data3.storage3);
        from === 'menu' ? this.router.navigate(['listaMagazzini']) : null;
        this.historyNavigation.push('listaMagazzini');

      },
      err => console.error(err),
      () => console.log('done loading magazzini')
    );
  }
  mostraInsertProduct(from: string) {
    this.serviceProdotti.getAll(this.root + "TipoQuantita/GetAllQta").subscribe(
      data => {
        let a = [];
        for (let i = 0; i < data.length; i++) {
          a[i] = data[i].MisuraIn
        }
        this.historyNavigation.push('formProdotto');
        this.data.storage = [
          {
            'etichetta': "Prodotto",
            'tipoHtml': "none",
            'elementiSelect': [],
            'isASelect': "none",
            'isAnInput': "none",
            'isAnImgFile': "none",
            'isADate': 'none'
          },
          {
            'etichetta': "Nome",
            'tipoHtml': "text",
            'elementiSelect': [],
            'isASelect': "none",
            'isAnInput': "block",
            'isAnImgFile': "none",
            'isADate': 'none'
          }, {
            'etichetta': "Tipo di misura",
            'tipoHtml': "text",
            'elementiSelect': a,
            'isASelect': "block",
            'isAnInput': "none",
            'isAnImgFile': "none",
            'isADate': 'none'
          }, {
            'etichetta': "Immagine",
            'tipoHtml': "",
            'elementiSelect': [],
            'isASelect': "none",
            'isAnInput': "none",
            'isAnImgFile': "block",
            'isADate': 'none'
          }];


        from === 'menu' ? this.router.navigate(['formProdotto']):null;
        this.modeldata =JSON.stringify( this.data.storage);
      
      },
      err => console.error(err),
      () => console.log('done loading misure')
    );
  }
  mostraInserisciScarpe() {
    this.data.storage = this.modelloFormScarpe;
    this.modeldata =JSON.stringify( this.data.storage);
    
    this.router.navigate(['formScarpe']);
    this.historyNavigation.push('formScarpe');
  }

}
