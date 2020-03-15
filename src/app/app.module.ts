import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './component/banner/banner.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DakServiceComponent } from './component/dak-service/dak-service.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    AboutUsComponent,
    DakServiceComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
