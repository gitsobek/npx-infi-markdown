import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxInfiMarkdownModule, NgxInfiMarkdownComponent } from 'projects/ngx-infi-markdown/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxInfiMarkdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
