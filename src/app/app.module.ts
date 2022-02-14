import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component'
import { UserComponent } from './user/user.component';
import { WorksComponent } from './works/works.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    AboutComponent,
    WorksComponent,
    ProductsComponent,
    ProductsDetailComponent,
    ContactoComponent

  ],
  imports: [

    RouterModule.forRoot([
      { path: '', component: UserComponent },
      { path: 'about', component: AboutComponent },
      { path: 'works', component: WorksComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:productId', component: ProductsDetailComponent },
      { path: 'contacto', component: ContactoComponent }
    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
