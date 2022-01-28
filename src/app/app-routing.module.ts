import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path:'', redirectTo: 'home', pathMatch:'full'},
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
{ path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
