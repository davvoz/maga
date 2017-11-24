import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormModelComponent } from './form-model/form-model.component';
import { ImageUploadModule } from "angular2-image-upload";
import { HomeComponent } from './home/home.component';
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
import { ListaBaseComponent } from './lista-base/lista-base.component';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpService} from './services/httpService'
import { RouterModule, Routes } from '@angular/router';
import{Data}from'./providers/data/data';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formProdotto',  component: FormModelComponent },
  { path: 'formPersona',    component: FormModelComponent  },
  { path: 'formScarpe',    component: FormModelComponent  },
  { path: 'listaChimica', component: ListaBaseComponent },
  { path: 'listaProdotti', component: ListaBaseComponent },
  { path: 'listaMagazzini', component: ListaBaseComponent }
//   { path: 'listaProdotti/:data', component: ListaBaseComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    FormModelComponent,
    HomeComponent,
    ListaBaseComponent
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
    CdkTableModule
  ],
  providers: [HttpService,Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
