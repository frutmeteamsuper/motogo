import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public _butler:Butler
  ) { }

public statusChange(){
  if(this._butler.bikerStatus){
    this._butler.bikerStatus=false;
    return
  }  
  if(!this._butler.bikerStatus){
    this._butler.bikerStatus=true;

  }
}

  ngOnInit(): void {
  }

}
