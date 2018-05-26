import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsSidebarComponent } from './markets-sidebar.component';

describe('MarketsSidebarComponent', () => {
  let component: MarketsSidebarComponent;
  let fixture: ComponentFixture<MarketsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
