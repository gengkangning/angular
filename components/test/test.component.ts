import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Output() getIndex=new EventEmitter();
  ngOnInit() {
  }
  fn(i){
    this.getIndex.emit(i);
  }

}
