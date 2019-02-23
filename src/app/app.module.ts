import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
      MatIconModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
