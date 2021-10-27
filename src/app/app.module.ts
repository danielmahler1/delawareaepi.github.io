import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//import { environment } from "src/environments/environment";
//import { AngularFireModule } from "@angular/fire/compat";
//import { AngularFireAuthModule } from "@angular/fire/compat/auth";
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { environment } from "src/environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrotherhoodComponent } from './brotherhood/brotherhood.component';
import { RushComponent } from './rush/rush.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { AcademicComponent } from './academic/academic.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';
import { BrotherModalComponent } from './brother-modal/brother-modal.component';
import { CompositeComponent } from './composite/composite.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrotherhoodComponent,
    RushComponent,
    CustomInputComponent,
    AcademicComponent,
    NewsletterComponent,
    ContactComponent,
    BrotherModalComponent,
    CompositeComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    //AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [{
    provide: API_KEY,
    useValue: environment.firebaseConfig.apiKey,
  },
  GoogleSheetsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
