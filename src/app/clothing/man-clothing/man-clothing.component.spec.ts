import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManClothingComponent } from './man-clothing.component';

describe('ManClothingComponent', () => {
  let component: ManClothingComponent;
  let fixture: ComponentFixture<ManClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManClothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
