import { Component,OnInit } from '@angular/core';
import { ScriptService } from './services/script.service';
//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'motogo';
  constructor(
    public script:ScriptService
  ){}
  ngOnInit(): void {
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
