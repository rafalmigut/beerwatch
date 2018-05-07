import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInfoComponent } from './beer-info.component';

describe('BeerInfoComponent', () => {
  let component: BeerInfoComponent;
  let fixture: ComponentFixture<BeerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
