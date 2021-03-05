import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//import { AddPersonComponent } from './add-person/add-person.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/Forms';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FooterComponent,
    HeaderComponent,
   // AddPersonComponent,
    HomeComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule, NgbModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
