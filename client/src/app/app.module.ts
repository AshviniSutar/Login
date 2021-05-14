import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server.component';
import { SubServerComponent } from './sub-server/sub-server.component';
import { ProjComponent } from './proj/proj/proj.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubServerComponent,
    ProjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
