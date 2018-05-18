import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLaunchComponent } from '../pages/launch/page-launch.component';
import { HomeComponent } from '../pages/home/home.component';
import { PageCompanyComponent } from '../pages/company/page-company.component';
import { RocketListComponent } from '../pages/rocket/list/rocketList.component';
import { CapsuleListComponent } from '../pages/capsule/list/capsuleList.component';
import { LaunchpadListComponent } from '../pages/launchpad/list/launchpadList.component';
import { LaunchpadDetailsComponent } from '../pages/launchpad/details/launchpadDetails.component';
import { PageDetailedCapsuleComponent } from '../pages/detailed-capsule/page-detailed-capsule.component';
import { PageDetailedCoreComponent } from '../pages/detailed-core/page-detailed-core.component';
import { CapsuleDetailsComponent } from '../pages/capsule/details/capsuleDetails.component';
import { RocketDetailsComponent } from '../pages/rocket/details/rocketDetails.component';

const appRoutes: Routes = [
  {
    path: 'company',
    component: PageCompanyComponent
  },
  {
    path: 'rocket',
    component: RocketListComponent
  },
  {
    path: 'rocket/:id',
    component: RocketDetailsComponent
  },
  {
    path: 'capsule',
    component: CapsuleListComponent
  },
  {
    path: 'capsule/:id',
    component: CapsuleDetailsComponent
  },
  {
    path: 'launchpad',
    component: LaunchpadListComponent
  },
  {
    path: 'launchpad/:id',
    component: LaunchpadDetailsComponent
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
