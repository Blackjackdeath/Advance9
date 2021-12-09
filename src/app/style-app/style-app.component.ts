import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-style-app',
  templateUrl: './style-app.component.html',
  styleUrls: ['./style-app.component.scss']
})
export class StyleAppComponent implements OnInit {
  listS:boolean=false;
  tableS:boolean=false;
  @Output() dateAdd= new EventEmitter<string>();
  @Output() hideAdd= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  };
  tableShow(){
    this.tableS=true;
    this.listS=false;
  };
  listShow(){
    this.listS=true;
    this.tableS=false;
  };
  createList(date:any){
    let list:string='';
    list+= `<ul style="list-style-type: ${date.typeMark}">`;
    for (let i = 0; i < parseInt(date.countLi); i++) {
      list += `<li>item ${i + 1}</li>`;
    }
    list += '</ul>';
    this.hideAdd.emit(false);
    return this.dateAdd.emit(list);
  };
  createTable(date:any){
    let list:string='';
    list += `<table style="border-width: ${date.widthBorder}px; border-style: ${date.typeBorder}; border-color:${date.colorBorder};">`
    for (let i = 0; i < parseInt(date.countTR); i++) {
      list += `<tr style="height: ${date.heightTD}px; border-width: ${date.widthBorder}px; border-style: ${date.typeBorder}; border-color:${date.colorBorder};">`;
      for (let j = 0; j < parseInt(date.countTD); j++) {
        list += `<td style="width: ${date.widthTD}px; border-width: ${date.widthBorder}px; border-style: ${date.typeBorder}; border-color:${date.colorBorder};">TD</td>`
      };
      list += "</tr>";
    };
    list += "</table>";
    this.hideAdd.emit(false);
    return this.dateAdd.emit(list);
  };

}
