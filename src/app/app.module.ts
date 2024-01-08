import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { WelcomeCompoent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path :"products" , component: ProductListComponent},
        {path:'product/:id' , component:ProductDetailsComponent},
        {path:'welcome', component:WelcomeCompoent},
        {path:'', redirectTo:'welcome', pathMatch:'full'},
        {path:'**', component:WelcomeCompoent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
