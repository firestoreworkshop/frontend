import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      SidebarComponent,
      ToolbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,

      AngularFireModule.initializeApp(environment.firebase), // koblingsordre-hn-test
      AngularFirestoreModule,
      AngularFireFunctionsModule,
      AngularFireAuthModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
