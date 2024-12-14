import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildClothingComponent } from './child-clothing.component';

describe('ChildClothingComponent', () => {
  let component: ChildClothingComponent;
  let fixture: ComponentFixture<ChildClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildClothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
