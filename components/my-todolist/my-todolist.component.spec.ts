import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodolistComponent } from './my-todolist.component';
//import {save} from './services';

describe('MyTodolistComponent', () => {
  let component: MyTodolistComponent;
  let fixture: ComponentFixture<MyTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
