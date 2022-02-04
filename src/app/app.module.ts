import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderModule } from '@shared/components/header/header.module';
import { LeftSidebarModule } from '@shared/components/left-sidebar/left-sidebar.module';
import { FilterModule } from '@shared/components/filter/filter.module';
import { NotificationsModule } from './components/pages/notifications/notifications.module';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LeftSidebarModule,
    FilterModule,
    NgxUsefulSwiperModule,
    NotificationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
