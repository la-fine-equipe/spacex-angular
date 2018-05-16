import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import {PageLaunchComponent} from '../page-launch/page-launch.component';
import {HomeComponent} from '../home/home.component';
import {PageCompanyComponent} from '../page-company/page-company.component';
import {PageRocketComponent} from '../page-rocket/page-rocket.component';
import {PageCapsuleComponent} from '../page-capsule/page-capsule.component';
import {PageLaunchpadComponent} from '../page-launchpad/page-launchpad.component';
import {PageDetailedCapsuleComponent} from '../page-detailed-capsule/page-detailed-capsule.component';
import {PageDetailedCoreComponent} from '../page-detailed-core/page-detailed-core.component';

const appRoutes: Routes = [
  {
    path: 'company',
    component: PageCompanyComponent
  },
  {
    path: 'rocket',
    component: PageRocketComponent
  },
  {
    path: 'capsule',
    component: PageCapsuleComponent
  },
  {
    path: 'launchpad',
    component: PageLaunchpadComponent
  },
  {
    path: 'launches',
    component: PageLaunchComponent
  },
  {
    path: 'detailed-capsule',
    component: PageDetailedCapsuleComponent
  },
  {
    path: 'detailed-core',
    component: PageDetailedCoreComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
