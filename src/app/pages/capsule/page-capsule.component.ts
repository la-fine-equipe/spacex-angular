import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-capsule',
  templateUrl: './page-capsule.component.html',
  styleUrls: ['./page-capsule.component.scss']
})
export class PageCapsuleComponent implements OnInit {
  
  capsules;
  
    constructor(private spacexApi: SpacexApiService) { }
  
    ngOnInit() {
      this.spacexApi.getCapsules().subscribe(data => this.capsules = data);
    }
}
