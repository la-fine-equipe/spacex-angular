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
import { LaunchpadListComponent } from './pages/launchpad/list/launchpadList.component';
import { PageDetailedCapsuleComponent } from './pages/detailed-capsule/page-detailed-capsule.component';
import { PageDetailedCoreComponent } from './pages/detailed-core/page-detailed-core.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LaunchpadDetailsComponent } from './pages/launchpad/details/launchpadDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLaunchComponent,
    HeaderComponent,
    HomeComponent,
    PageCompanyComponent,
    PageRocketComponent,
    PageCapsuleComponent,
    LaunchpadListComponent,
    PageDetailedCapsuleComponent,
    PageDetailedCoreComponent,
    FooterComponent,
    LaunchpadDetailsComponent,
    LaunchpadDetailsComponent
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
