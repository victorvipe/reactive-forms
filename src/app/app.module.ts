import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsTemplateDrivenFormComponent } from './components/comments-template-driven-form/comments-template-driven-form.component';
import { CommentsReactiveFormComponent } from './components/comments-reactive-form/comments-reactive-form.component';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailValidatorDirective } from './common/directives/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommentsTemplateDrivenFormComponent,
    CommentsReactiveFormComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SystelabTranslateModule,
    SystelabComponentsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
