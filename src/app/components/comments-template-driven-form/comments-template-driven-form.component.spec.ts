import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTemplateDrivenFormComponent } from './comments-template-driven-form.component';

describe('CommentsTemplateDrivenFormComponent', () => {
  let component: CommentsTemplateDrivenFormComponent;
  let fixture: ComponentFixture<CommentsTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsTemplateDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
