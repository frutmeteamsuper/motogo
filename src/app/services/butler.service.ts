import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Butler {
    vector:any={};       
    string:string=""; 
    biker:boolean=false;
    type:string="Passenger"; 
	any:any[]=[]; 
    number:number=0;
    constructor() { }
}