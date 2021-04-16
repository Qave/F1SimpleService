import { F1SimpleService } from './f1-simple.service';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpServiceComponent,
    DriverDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [F1SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
