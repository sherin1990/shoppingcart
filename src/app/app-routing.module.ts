import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'bookList', pathMatch:'full'},
  {path:'books', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'book-details', component: BookdetailsComponent },
  {path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
