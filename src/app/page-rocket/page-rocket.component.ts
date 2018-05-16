import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Backend/spacex-api.service';

@Component({
  selector: 'app-page-rocket',
  templateUrl: './page-rocket.component.html',
  styleUrls: ['./page-rocket.component.scss']
})
export class PageRocketComponent implements OnInit {
  rockets;

  constructor(private spacexApi: SpacexApiService) { }

  ngOnInit() {
    this.spacexApi.getRockets().subscribe(data => this.rockets = data);
  }

}
