import { Component } from '@angular/core';
import { FooterMenuComponent } from '../footer-menu/footer-menu.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterMenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
