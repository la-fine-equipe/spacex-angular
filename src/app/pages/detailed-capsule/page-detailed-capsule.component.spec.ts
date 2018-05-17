import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailedCapsuleComponent } from './page-detailed-capsule.component';

describe('PageDetailedCapsuleComponent', () => {
  let component: PageDetailedCapsuleComponent;
  let fixture: ComponentFixture<PageDetailedCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailedCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailedCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
