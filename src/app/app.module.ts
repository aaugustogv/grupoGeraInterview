import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DistribuidoraComponent } from './distribuidora/distribuidora.component';
import { DistribuidoraService } from './distribuidora.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DistribuidoraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [DistribuidoraService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
