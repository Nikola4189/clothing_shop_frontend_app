import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInfoDialogComponent } from './article-info-dialog.component';

describe('ArticleInfoDialogComponent', () => {
  let component: ArticleInfoDialogComponent;
  let fixture: ComponentFixture<ArticleInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleInfoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
