import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-detailed-capsule',
  templateUrl: './page-detailed-capsule.component.html',
  styleUrls: ['./page-detailed-capsule.component.scss']
})
export class PageDetailedCapsuleComponent implements OnInit {

  capsulesDetails;
  
    constructor(private spacexApi: SpacexApiService) { }
  
    ngOnInit() {
      this.spacexApi.getCapsulesDetails().subscribe(data => this.capsulesDetails = data);
    }

}
