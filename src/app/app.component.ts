import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header';
import { SidebarComponent } from './shared/sidebar/sidebar';
import { FooterComponent } from './shared/footer/footer';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly authService = inject(AuthService);
  public currentUser = this.authService.currentUser;

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
