import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink, CommonModule],
  template: `
    <div class="overlay" (click)="close.emit()">
      <nav>
        <ul>
          <li><a routerLink="/" (click)="close.emit()">Inicio</a></li>
          <li><a routerLink="/cart" (click)="close.emit()">Carrito</a></li>
          @if (!authService.isAuthenticated()) {
            <li><a routerLink="/login" (click)="close.emit()">Iniciar Sesión</a></li>
          } @else {
            <li><a routerLink="/profile" (click)="close.emit()">Perfil</a></li>
            <li><a routerLink="/inventory" (click)="close.emit()">Inventario</a></li>
            <li><a (click)="logout()" style="cursor: pointer;">Cerrar Sesión</a></li>
          }
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    nav {
      background-color: white;
      padding: 2rem;
      border-radius: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent {
  authService = inject(AuthService);
  close = output<void>();

  logout() {
    this.authService.logout();
    this.close.emit();
  }
}
