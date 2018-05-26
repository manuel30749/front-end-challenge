import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellPosturesComponent } from './buy-sell-postures.component';

describe('BuySellPosturesComponent', () => {
  let component: BuySellPosturesComponent;
  let fixture: ComponentFixture<BuySellPosturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellPosturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellPosturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
