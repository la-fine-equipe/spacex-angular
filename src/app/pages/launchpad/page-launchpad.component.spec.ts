import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLaunchpadComponent } from './page-launchpad.component';

describe('PageLaunchpadComponent', () => {
  let component: PageLaunchpadComponent;
  let fixture: ComponentFixture<PageLaunchpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLaunchpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLaunchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
