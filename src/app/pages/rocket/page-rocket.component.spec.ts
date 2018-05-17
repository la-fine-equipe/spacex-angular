import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRocketComponent } from './page-rocket.component';

describe('PageRocketComponent', () => {
  let component: PageRocketComponent;
  let fixture: ComponentFixture<PageRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
