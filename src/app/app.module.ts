import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { WorkAppComponent } from './work-app/work-app.component';
import { StyleAppComponent } from './style-app/style-app.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkAppComponent,
    StyleAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }
  showAdd(){

  }
}


