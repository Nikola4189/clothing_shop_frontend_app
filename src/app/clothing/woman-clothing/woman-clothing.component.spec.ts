import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanClothingComponent } from './woman-clothing.component';

describe('WomanClothingComponent', () => {
  let component: WomanClothingComponent;
  let fixture: ComponentFixture<WomanClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomanClothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomanClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
