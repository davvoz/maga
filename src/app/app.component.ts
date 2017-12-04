import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from "@angular/router";
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from './services/httpService';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Location, LocationStrategy, PathLocationStrategy, PlatformLocation } from '@angular/common';
import { Navigation } from 'selenium-webdriver';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})

export class AppComponent {

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
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }];

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


  root = "http://localhost:53236/";
  modelloFormScarpe = [
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
      'elementiSelect': ['naik','ribock','puba','tinderland'],
      'isASelect': "block",
      'isAnInput': "none",
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
  modelloFormMisura = [
    {
      'etichetta': "Misura",
      'tipoHtml': "none",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "none",
      'isAnImgFile': "none",
      'isADate': 'none'
    },
    {
      'etichetta': "Misura in",
      'tipoHtml': "text",
      'elementiSelect': [],
      'isASelect': "none",
      'isAnInput': "block",
      'isAnImgFile': "none",
      'isADate': 'none'
    },
  ];
  modeldata;
  modeldata2;
  modeldata3;
  modelLocation;
  loading = false;
  constructor(
    private serviceProdotti: HttpService,
    private serviceMagazzino: HttpService,
    private serviceQta: HttpService,
    public router: Router,
    public location: Location,
    public locationPlat: PlatformLocation,
    
  ) {
    this.location = location;
    this.modelLocation = JSON.stringify(this.location)
  }

  ngOnInit(): void {

  }
  setSessions(path: string, el: any) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        sessionStorage.setItem('temp', JSON.stringify({ index: event.id + "", path: event.url.substr(1, event.url.length) }));
      
      }
    });
    sessionStorage.setItem(path, JSON.stringify(el));
    this.router.navigate([path]);
  }
  goHome() {
    this.setSessions('home', 'testo della home')
  }
  mostraListaChimica() {
    this.setSessions('listaChimica', this.tavolaChimicaDati)
  }
  
  getProdottiQta() {
    this.loading = true;
    this.serviceProdotti.getAll(this.root + "ProdottoQta/GetAllProdottiQtaSimple").subscribe(
      data => {
        this.setSessions('listaProdotti', data)
        this.loading = false;
      },
      err => console.error(err),
      () => console.log('done loading prodotti')
    );

  }
  getMagazzini() {
    this.loading = true;
    this.serviceMagazzino.getAll(this.root + "Magazzino/GetMagazzini").subscribe(
      data => {
        this.setSessions('listaMagazzini', data)
        this.loading = false;
      },
      err => console.error(err),
      () => console.log('done loading magazzini')
    );
  }
  inserisciProduct() {
    this.loading = true;
    this.serviceProdotti.getAll(this.root + "TipoQuantita/GetAllQta").subscribe(
      data => {
        let listaMisure = [];
        for (let i = 0; i < data.length; i++) {
          listaMisure[i] = data[i].MisuraIn
        }
        let modProd = [
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
            'elementiSelect': listaMisure,
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
        this.setSessions('formProdotto', modProd);
        this.loading = false;
      },
      err => console.error(err),
      () => console.log('done insert product')
    );
  }
  inserisciScarpe() {
    this.setSessions('formScarpe', this.modelloFormScarpe);
  }
  inserisciMisura(){
    this.setSessions('formMisura', this.modelloFormMisura);
  }
  inserisciPersona() {
    this.setSessions('formPersona', this.modelloFormPersona);
  }
  

}
// export function getLocalStorage() {
//   return (typeof window !== "undefined") ? window.localStorage : null;;
// }
