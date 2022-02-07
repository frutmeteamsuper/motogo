import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Butler {
    vector:any={};       
    string:string=""; 
    biker:boolean=false;
    details:boolean=false;
    profile:boolean=true;
    rides:boolean=false;
    bikerStatus:boolean=true;
    type:string="Passenger"; 
	  any:any[]=[]; 
    number:number=0;
    constructor() { }
}