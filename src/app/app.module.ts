import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageLaunchComponent } from './page-launch/page-launch.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageCompanyComponent } from './page-company/page-company.component';
import { PageRocketComponent } from './page-rocket/page-rocket.component';
import { PageCapsuleComponent } from './page-capsule/page-capsule.component';
import { PageLaunchpadComponent } from './page-launchpad/page-launchpad.component';
import { PageDetailedCapsuleComponent } from './page-detailed-capsule/page-detailed-capsule.component';
import { PageDetailedCoreComponent } from './page-detailed-core/page-detailed-core.component';
import { FooterComponent } from './footer/footer.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
