import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LrtToolComponent } from './pages/lrt-tool/lrt-tool.component';
import { CsvParseComponent } from './pages/csv-parse/csv-parse.component';







@NgModule({
  declarations: [
    AppComponent,
    LrtToolComponent,
    CsvParseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
