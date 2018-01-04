import {
  Component,
  OnInit,
  EventEmitter,
  HostListener
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  RoutesRecognized
} from "@angular/router";
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from './services/httpService';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
  PlatformLocation
} from '@angular/common';
import { Navigation } from 'selenium-webdriver';
import { AngularVersion } from './classes/angularVersion';
import { MaterialVersion } from './classes/materialVersion';
import { Prodotto, Misura } from "./interfaces/interfaces";
import { HttpClient } from "@angular/common/http";
import { MiniaturaComponent } from './components/generalized/miniatura/miniatura.component';
import { GeneralGridComponent } from './components/generalized/general-grid/general-grid.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],

})

export class AppComponent {

  title = { big: "C", small: "RUD", fontSize: "230%", color: "ocra" };
  root = "http://localhost:53236/";
  modeldata;
  modeldata2;
  modeldata3;
  modelLocation;
  loading = false;
  sessionData;
  angularVersion: AngularVersion = new AngularVersion();
  materialVersion: MaterialVersion = new MaterialVersion();
  prodottoInterface: Prodotto;
  miniatureArray = [{ big: "C", small: "reate" }, { big: "R", small: "ead" }, { big: "U", small: "pdate" }, { big: "D", small: "elete" }];
  slideshowProdMiniature = { big: "S", small: "lideshow" };
  listaProdMiniature = { big: "L", small: "ista prodotti" };
  logo = { big: "C", small: "RUD", subtitle: "API's operations", fontSize: "180%" };
  createProdMiniatura = { big: "P", small: "rodotto" };
  createMagMiniatura = { big: "M", small: "agazzino" };
  createQtaMiniatura = { big: "M", small: "isura" };
  createGiacenzaMiniatura = { big: "G", small: "iacenza" };
  listaMisureMiniature = { big: "L", small: "ista misure" };
  listaMagMiniature = { big: "L", small: "ista magazzini" }
  prodottiMiniature = { big: "P", small: "rodotti" };

  
  constructor(
    private serviceProdotti: HttpService,
    private serviceMagazzino: HttpService,
    private serviceQta: HttpService,
    public router: Router,
    public location: Location,
    public locationPlat: PlatformLocation,
    private httpClientProdotto: HttpClient,
    private httpClientMisura: HttpClient,
    private generalService: HttpService

  ) {
    this.location = location;
    this.modelLocation = JSON.stringify(this.location);
    this.sessionData = JSON.stringify(sessionStorage);
   // this.misure();
  }

  ngOnInit(): void {

  }

  getSomeThing(destination: string, tipo: string, query: string) {
    this.loading = true;
    this.generalService.getAll(query).subscribe(
      data => {
        sessionStorage.setItem('typeOfEntity', tipo);
        sessionStorage.setItem(tipo, JSON.stringify(data));
        
        this.loading = false;

        console.log(data);
        this.router.navigate([destination]);

      },
      err => console.log(err + " Failed to load " + query),
      () => console.log('done loading ' + tipo)
    );
  }

  goPresentation() {
    this.router.navigate(['presentation'])
  }
  
  go(crudAction: string, entity: string, navigationPath: string) {
    console.log(crudAction, entity);

    switch (crudAction + entity) {
      case 'CREATEPRODOTTO':
        this.getSomeThing(navigationPath, 'listaMisure', this.root + "TipoQuantita/GetAllQta");
        break;
      case 'CREATEMAGAZZINO':
        this.router.navigate([navigationPath]);
        break;
      case 'CREATEMISURA':
        this.router.navigate([navigationPath]);
        break;
      case 'CREATEGIACENZA':
        //work in standby
        break;
      case 'READPRODOTTO':
        this.getSomeThing(navigationPath, 'listaProdotti', this.root + "ProdottoQta/GetAllProdottiQta");
        break;
      case 'READMAGAZZINO':
        this.getSomeThing(navigationPath, 'listaMagazzini', this.root + "Magazzino/GetMagazzini");
        break;
      case ('READMISURA'):
         this.getSomeThing(navigationPath, 'listaMisure', this.root + "/TipoQuantita/GetAllQtaDipendenze");
       
        break;
      case 'READGIACENZA':
        //work in standby
        break;
      case 'UPDATEPRODOTTO':
        this.getSomeThing(navigationPath, 'listaProdotti', this.root + "ProdottoQta/GetAllProdottiQta");
        break;
      case 'UPDATEMAGAZZINO':
        // GeneralGridComponent.status.next(true);
        this.getSomeThing(navigationPath, 'listaMagazzini', this.root + "Magazzino/GetMagazzini");
        //work in standby
        break;

      case 'UPDATEGIACENZA':
        //work in standby
        break;

    }
  }



}

