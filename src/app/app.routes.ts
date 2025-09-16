import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'product',
    component: ProductDetailsComponent,
  },
];
