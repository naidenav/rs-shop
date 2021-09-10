import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationChainComponent } from './navigation-chain.component';

describe('NavigationChainComponent', () => {
  let component: NavigationChainComponent;
  let fixture: ComponentFixture<NavigationChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationChainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
