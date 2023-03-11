import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAdditemsComponent } from './todo-input-additems.component';

describe('TodoInputAdditemsComponent', () => {
  let component: TodoInputAdditemsComponent;
  let fixture: ComponentFixture<TodoInputAdditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAdditemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputAdditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
