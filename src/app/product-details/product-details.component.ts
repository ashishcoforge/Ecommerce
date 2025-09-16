import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NewsletterComponent,
    FooterComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {}
