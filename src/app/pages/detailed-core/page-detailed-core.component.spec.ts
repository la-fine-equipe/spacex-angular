import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailedCoreComponent } from './page-detailed-core.component';

describe('PageDetailedCoreComponent', () => {
  let component: PageDetailedCoreComponent;
  let fixture: ComponentFixture<PageDetailedCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailedCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailedCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
