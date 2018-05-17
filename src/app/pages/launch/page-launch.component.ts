import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-launch',
  templateUrl: './page-launch.component.html',
  styleUrls: ['./page-launch.component.scss']
})
export class PageLaunchComponent implements OnInit {

  launches;
  pastLaunches;
  upcomingLaunches;
  latestLaunches;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getAllLaunches().subscribe(data => this.launches = data);
    this.spacexApi.getPastLaunches().subscribe(data => this.pastLaunches = data);
    this.spacexApi.getUpcomingLaunches().subscribe(data => this.upcomingLaunches = data);
    this.spacexApi.getLatestLaunches().subscribe(data => this.latestLaunches = data);
  }

}
