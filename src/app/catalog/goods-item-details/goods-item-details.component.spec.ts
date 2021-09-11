import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsItemDetailsComponent } from './goods-item-details.component';

describe('GoodsItemDetailsComponent', () => {
  let component: GoodsItemDetailsComponent;
  let fixture: ComponentFixture<GoodsItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
