import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { SidebarLeftNavComponent } from './sidebar-left-nav/sidebar-left-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { TestComponent } from './test/test.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormReactComponent } from './form-react/form-react.component';
@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    SidebarLeftNavComponent,
    HeaderNavComponent,
    TestComponent,
    LoginComponent,
    FormReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
