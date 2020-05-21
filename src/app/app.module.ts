import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, FooterComponent]
})
export class HeaderViewModule {
  constructor(injector: Injector) {
    const header = createCustomElement(HeaderComponent, { injector });
    customElements.define('app-header', header);
    const footer = createCustomElement(FooterComponent, { injector });
    customElements.define('app-footer', footer);
  }
 }
