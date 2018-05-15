import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCapsuleComponent } from './page-capsule.component';

describe('PageCapsuleComponent', () => {
  let component: PageCapsuleComponent;
  let fixture: ComponentFixture<PageCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
