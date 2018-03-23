import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { TestComponent } from './components/test/test.component';
import { MyTodolistComponent } from './components/my-todolist/my-todolist.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import {SaveService} from './services/save.service';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    TestComponent,
    MyTodolistComponent,
    MyInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
