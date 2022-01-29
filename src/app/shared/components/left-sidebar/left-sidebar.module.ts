import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar.component';



@NgModule({
  declarations: [
    LeftSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LeftSidebarComponent],
})
export class LeftSidebarModule { }
