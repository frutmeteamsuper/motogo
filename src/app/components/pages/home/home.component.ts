import { Component, OnInit } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public script:ScriptService ,
  ) { } 

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
