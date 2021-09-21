import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsFieldComponent } from './goods-field.component';

describe('GoodsFieldComponent', () => {
  let component: GoodsFieldComponent;
  let fixture: ComponentFixture<GoodsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
