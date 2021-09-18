import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecureModule} from './secure/secure.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CredentialInterceptor} from './interceptors/credential.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
