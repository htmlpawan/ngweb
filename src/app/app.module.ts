import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { SidebarLeftNavComponent } from './sidebar-left-nav/sidebar-left-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    SidebarLeftNavComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
