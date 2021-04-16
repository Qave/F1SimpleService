import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../driver';
import { F1SimpleService } from '../f1-simple.service';

@Component({
  selector: 'app-simple-http-service',
  templateUrl: './simple-http-service.component.html',
  styleUrls: ['./simple-http-service.component.css']
})
export class SimpleHttpServiceComponent implements OnInit {

  drivers: Observable<Driver[]>;

  constructor(private service: F1SimpleService ) { 

    // service.getDriver().subscribe(response => this.drivers = response)


    this.drivers = this.service.getDriver();
  }

  ngOnInit(): void {

  }

}
