import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LeftSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LeftSidebarComponent],
})
export class LeftSidebarModule { }
