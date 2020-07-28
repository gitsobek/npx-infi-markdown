import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxInfiMarkdownModule } from 'projects/ngx-infi-markdown/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxInfiMarkdownModule.forRoot({
      storageType: 'localStorage',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
