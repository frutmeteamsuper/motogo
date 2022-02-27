import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
import {Butler} from '@app/services/butler.service';
import { BikersService } from '@app/services/';
import {Map} from 'mapbox-gl';


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

@ViewChild('mapDiv')mapDivElement!:ElementRef

link:string="";
  constructor(
    private bikersService:BikersService,
    public script:ScriptService,
    public _butler: Butler
  ) { } 

  config: SwiperOptions = {

    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    spaceBetween: 5,
    navigation: false
  };  
  

public details(b:any){
  let a =b;
  if (a==1){this.link="assets/assets/img/user4.jpg";}
  if (a==2){this.link="assets/assets/img/user10.jpg";}
  if (a==3){this.link="assets/assets/img/user40.jpg";}
  if (a==4){this.link="assets/assets/img/user2.jpg";}
  if (a==5){this.link="assets/assets/img/user20.jpg";}
  if (a==6){this.link="assets/assets/img/user3.jpg";}
if(!this._butler.details){
    this._butler.details=true;
    return
  }else{
    this._butler.details=false;
  }
}
get isUserLocationReady(){
  return this.bikersService.isUserLocationReady;
}
  ngAfterViewInit(): void {

    console.log(this.bikersService.userLocation);
     this.script.load(
    'jquery',
    'popper',
    'bootstrap-5',
    'main',
    'color-scheme',
    'pwa-services',
    'chart-js',
    'progressbar',
    'swiper',
    'app')
    .then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
   
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center:this.bikersService.userLocation,
      pitch: 60, // pitch in degrees
      bearing: -60, // bearing in degrees
      zoom: 15 // starting zoom
      });
  }
}
