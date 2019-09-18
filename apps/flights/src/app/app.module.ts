import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  
  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('airways-flights', appElement);
  }
}
