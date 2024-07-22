import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsReactiveFormComponent } from './comments-reactive-form.component';

describe('CommentsReactiveFormComponent', () => {
  let component: CommentsReactiveFormComponent;
  let fixture: ComponentFixture<CommentsReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
