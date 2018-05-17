import { CoresDetails } from '../../models/coresDetails';
import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../../backend/spacex-api.service';

@Component({
  selector: 'app-page-detailed-core',
  templateUrl: './page-detailed-core.component.html',
  styleUrls: ['./page-detailed-core.component.scss']
})
export class PageDetailedCoreComponent implements OnInit {

  coresDetails: CoresDetails;
  
    constructor(private spacexApi: SpacexApiService) { }
  
    ngOnInit() {
      this.spacexApi.getCoresDetails().subscribe(data => this.coresDetails = data);
    }

}
