import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//bootstrap
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BxmodalComponent } from './bxmodal/bxmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    BxmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
