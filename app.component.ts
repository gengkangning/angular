import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str:string='abc';
  data:any;
  // 插值表达式
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // todolist
  dataArr=[];
  dataArr1=[];
  gettodolist(a){
    console.log(a);
  }
}
