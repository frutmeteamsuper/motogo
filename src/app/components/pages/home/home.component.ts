import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
import {Butler} from '@app/services/butler.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(
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

  ngAfterViewInit(): void {
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
    .then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
   }
}
