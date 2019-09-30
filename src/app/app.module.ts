import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  CollapseModule,
  BsDropdownModule,
} from 'ngx-bootstrap';


import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './security/register/register.component';
import { LoginComponent } from './security/login/login.component'
import { RouterModule } from '@angular/router';
import { routingModule } from './app.routing';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FormBoxComponent } from './components/form-box/form-box.component';
import { EducationComponent } from './security/register/education/education.component';
import { ExperienceComponent } from './security/register/experience/experience.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    MainComponent,
    ContactComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    FormContainerComponent,
    FormBoxComponent,
    EducationComponent,
    ExperienceComponent,
    ActionButtonsComponent,
    FormDebugComponent,
    InputFieldComponent,
    ErrorMsgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    routingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
