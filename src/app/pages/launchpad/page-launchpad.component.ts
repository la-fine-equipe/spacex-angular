import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-launchpad',
  templateUrl: './page-launchpad.component.html',
  styleUrls: ['./page-launchpad.component.scss']
})
export class PageLaunchpadComponent implements OnInit {

  launchpads;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getLaunchpads().subscribe(data => this.launchpads = data);
  }

}
