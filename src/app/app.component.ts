import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroBannerComponent,
    FeatureCardComponent,
    ProductCardComponent,
    CategoryCardComponent,
    FooterComponent,
    ButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EcommerceTemp';
}
