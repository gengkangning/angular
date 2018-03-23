import { Injectable } from '@angular/core';

@Injectable()
export class SaveService {

  constructor() { }
  Getsto(str){
    var arr=JSON.parse(localStorage.getItem(str));
    if(!arr){
      arr=[];
    }
    return arr;
  }
  SetSto(str,val){
    localStorage.setItem(str,JSON.stringify(val));
  }

}
