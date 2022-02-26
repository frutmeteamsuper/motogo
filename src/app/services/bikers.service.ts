import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BikersService {
  public userLocation?:  [number,number];
  
  get isUserLocationReady():boolean{
    return !!this.userLocation;
  }
  
  constructor() {
    this.getUserLocation();
   }
  public async  getUserLocation():Promise<[number,number]>{
    return new Promise( (resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        ( {coords})=>{
          this.userLocation= [coords.longitude,coords.latitude] ;
          resolve (this.userLocation );
          console.log(this.userLocation);
        },
        (err)=>{
          alert('nose pudo obtener la gelocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }
}
