import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatDividerModule,
  MatDialogModule,
  MatInputModule,
} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { YesNoPipe } from './pipes/yesno/yes-no.pipe';
import { FormsModule } from '@angular/forms';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewsComponent } from './restaurant/reviews/reviews.component';
import { AddReviewComponent } from './restaurant/reviews/add-review/add-review.component';

const matImports = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatDividerModule,
  MatDialogModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarComponent,
    ToolbarComponent,
    HomeComponent,
    RestaurantCardComponent,
    YesNoPipe,
    RestaurantComponent,
    ReviewsComponent,
    AddReviewComponent,
  ],
  entryComponents: [AddReviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    matImports,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
