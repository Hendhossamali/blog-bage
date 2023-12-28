import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    BlogPageComponent,
    SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-page';
}
