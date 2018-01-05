import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormModelComponent } from './components/generalized/form-model/form-model.component';
import { ImageUploadModule } from "angular2-image-upload";
import { HomeComponent } from './components/home/home.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { ListaBaseComponent } from './components/generalized/lista-base/lista-base.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpService } from './services/httpService'
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoadingModule } from 'ngx-loading';
import { TabellaProdottiComponent } from './components/tabella-prodotti/tabella-prodotti.component';
import { TabellaMagazziniComponent } from './components/tabella-magazzini/tabella-magazzini.component';
import { FormProdottoComponent } from './components/form-prodotto/form-prodotto.component'
import { CodemirrorModule } from 'ng2-codemirror';
import { HttpClientModule } from "@angular/common/http";
import { MyDialogComponent } from '../app/components/dialogs/my-dialog/my-dialog.component';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import { FormUpdateProdottoComponent } from './components/form-update-prodotto/form-update-prodotto.component';
import { MiniaturaComponent } from './components/generalized/miniatura/miniatura.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormMisuraComponent } from './components/form-misura/form-misura.component';
import { FormMagazzinoComponent } from './components/form-magazzino/form-magazzino.component';
import { TabellaMisureComponent } from './components/tabella-misure/tabella-misure.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { GeneralGridComponent } from './components/generalized/general-grid/general-grid.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'presentation', pathMatch: 'full' },
  { path: 'presentation',component:PresentationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'updateProdotto', component: FormUpdateProdottoComponent },
  { path: 'formProdotto', component: FormProdottoComponent },
  { path: 'formMisura', component: FormMisuraComponent },
  { path: 'formMagazzino', component: FormMagazzinoComponent },
  { path: 'listaProdotti', component: TabellaProdottiComponent },
  { path: 'listaMagazzini', component: TabellaMagazziniComponent },
  { path: 'listaMisure', component: TabellaMisureComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormModelComponent,
    HomeComponent,
    ListaBaseComponent,
    TabellaProdottiComponent,
    TabellaMagazziniComponent,
    FormProdottoComponent,
    MyDialogComponent,
    DeleteDialogComponent,
    FormUpdateProdottoComponent,
    MiniaturaComponent,
    LogoComponent,
    FormMisuraComponent,
    FormMagazzinoComponent,
    TabellaMisureComponent,
    PresentationComponent,
    GeneralGridComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CdkTableModule,
    LoadingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent, DeleteDialogComponent]
})
export class AppModule { }
