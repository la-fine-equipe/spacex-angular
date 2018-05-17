///<reference path="../../node_modules/@angular/core/src/metadata/ng_module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { PageLaunchComponent } from './pages/launch/page-launch.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCompanyComponent } from './pages/company/page-company.component';
import { PageRocketComponent } from './pages/rocket/page-rocket.component';
import { PageCapsuleComponent } from './pages/capsule/page-capsule.component';
import { PageLaunchpadComponent } from './pages/launchpad/page-launchpad.component';
import { PageDetailedCapsuleComponent } from './pages/detailed-capsule/page-detailed-capsule.component';
import { PageDetailedCoreComponent } from './pages/detailed-core/page-detailed-core.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PageLaunchComponent,
    HeaderComponent,
    HomeComponent,
    PageCompanyComponent,
    PageRocketComponent,
    PageCapsuleComponent,
    PageLaunchpadComponent,
    PageDetailedCapsuleComponent,
    PageDetailedCoreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
