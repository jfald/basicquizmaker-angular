import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizItemComponent } from './new-quiz-item.component';

describe('NewQuizItemComponent', () => {
  let component: NewQuizItemComponent;
  let fixture: ComponentFixture<NewQuizItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuizItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
