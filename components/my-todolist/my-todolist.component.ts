import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {SaveService} from '../../services/save.service'
@Component({
  selector: 'app-my-todolist',
  templateUrl: './my-todolist.component.html',
  styleUrls: ['./my-todolist.component.css']
})
export class MyTodolistComponent implements OnInit {

  constructor(public local:SaveService) { }
  data:any;
  @Output() todolist1=new EventEmitter();
  @Input() dataArr1;
  @Input() dataArr2;
  ngOnInit() {
  }
  gettodolist1(data){
    this.todolist1.emit(data);
  }
  add(){
    this.dataArr1.push(this.data);
    this.local.SetSto('dataarr1',this.dataArr1);
    this.data='';
  }
  achive(a){
    this.dataArr2.push(this.dataArr1[a]);
    this.local.SetSto('dataarr2',this.dataArr1);
    this.data='';
  }
  del1
}
