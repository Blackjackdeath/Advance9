import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-work-app',
  templateUrl: './work-app.component.html',
  styleUrls: ['./work-app.component.scss']
})


export class WorkAppComponent implements OnInit {
  showEd:boolean=false;
  showSt:boolean=false;
  showC:boolean=true;
  dateFromBox:string='';
  fontS:string='12px';
  fontF:string='Time New Roman';
  checkColor:boolean=true;
  colorChoose:string='';
  textColor:string='black';
  backgroundColorBox:string='lightgray';
  fontBoldText:string='normal';
  fontCursiveText:string='normal';
  showAdd:boolean=false;

  @Output() showAddBoxForm = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  };
  showEdit(){
    this.showEd=true;
    this.showSt=false;
    return this.dateFromBox=document.getElementsByClassName('box')[0].innerHTML

  };
  save(date:string){
    document.getElementsByClassName('box')[0].innerHTML=date;
    this.showEd=false;
  };
  showStyle(){
    this.showSt=true;
    this.showEd=false;
  };
  fontSize(size:string){
    this.fontS=size;
  };
  fontType(event:any){
    this.fontF=event.target.value
  };
  showColorBox(check:boolean){
    this.showC=false;
    this.checkColor=check;
  };
  chooseColor(event:any){
    this.colorChoose=event.target.style.backgroundColor;
    if(this.checkColor){
       this.textColor=this.colorChoose;
    }
    else{
      this.backgroundColorBox=this.colorChoose;
    };
    this.showC=true;
  };
  boldText(event:any){
    if(event.target.checked){
      this.fontBoldText='bold';
    }
    else{
      this.fontBoldText='normal';
    }
  };
  cursiveText(event:any){
    if(event.target.checked){
      this.fontCursiveText='italic';
    }
    else{
      this.fontCursiveText='normal';
    }
  };
  showAddBox(){
    this.showAddBoxForm.emit(true);
  }
}
