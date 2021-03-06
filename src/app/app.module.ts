import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DistribuidoraComponent } from './distribuidora/distribuidora.component';
import { DistribuidoraService } from './distribuidora.service';


@NgModule({
  declarations: [
    AppComponent,
    DistribuidoraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [DistribuidoraService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
