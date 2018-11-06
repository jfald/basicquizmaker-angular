import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItemDetailComponent } from './quizItem-detail.component';

describe('QuizItemDetailComponent', () => {
  let component: QuizItemDetailComponent;
  let fixture: ComponentFixture<QuizItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
