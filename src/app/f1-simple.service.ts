import { Driver } from './driver';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


interface IDriverData {MRData: {DriverTable: {Drivers: Driver[]; }; }; }

@Injectable({
  providedIn: 'root'
})
export class F1SimpleService {
  
  
  
  
  constructor(private httpClient: HttpClient) {
    
  }


  public getDriver(): Observable<Driver[]>{
    return this.httpClient.get<IDriverData>("http://ergast.com/api/f1/2019/drivers.json")
    .pipe(map(drivers => drivers.MRData.DriverTable.Drivers.map((driver: Driver) => driver)))
  }

}
