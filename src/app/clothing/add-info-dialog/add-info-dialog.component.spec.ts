import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoDialogComponent } from './add-info-dialog.component';

describe('AddInfoDialogComponent', () => {
  let component: AddInfoDialogComponent;
  let fixture: ComponentFixture<AddInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInfoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
