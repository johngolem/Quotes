import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotefComponent } from './quotef/quotef.component';
import { AvailqComponent } from './availq/availq.component';
import { VotesComponent } from './votes/votes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotefComponent,
    AvailqComponent,
    VotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



