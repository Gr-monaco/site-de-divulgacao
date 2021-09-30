import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWebsiteBodyComponent } from './main-website-body/main-website-body.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { TableListComponent } from './table-list/table-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainWebsiteBodyComponent,
    ButtonBarComponent,
    SignUpFormComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
