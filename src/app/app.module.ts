import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './commomcomponent/navbar/navbar.component';
import { FooterComponent } from './commomcomponent/footer/footer.component';
import { IphoneComponent } from './navigating/iphone/iphone.component';
import { AndroidComponent } from './navigating/android/android.component';
import { HelpComponent } from './navigating/help/help.component';
import { CompanyComponent } from './navigating/company/company.component';
import { SigninComponent } from './navigating/signin/signin.component';
import { AboutComponent } from './welcome/about/about.component';
import { AndriodUsersComponent } from './welcome/andriod-users/andriod-users.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { FindComponent } from './welcome/find/find.component';
import { LatestInsightsComponent } from './welcome/latest-insights/latest-insights.component';
import { MobileSecurityComponent } from './welcome/mobile-security/mobile-security.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent,
    AboutComponent,
    AndriodUsersComponent,
    BannerComponent,
    FindComponent,
    LatestInsightsComponent,
    MobileSecurityComponent,
    SpywareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
