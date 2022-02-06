import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Butler } from '@app/services/butler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _butler:Butler,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

}
