import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Backend/spacex-api.service';

@Component({
  selector: 'app-page-launch',
  templateUrl: './page-launch.component.html',
  styleUrls: ['./page-launch.component.scss']
})
export class PageLaunchComponent implements OnInit {

  launches;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getPastLaunches().subscribe(data => this.launches = data);
  }

}
