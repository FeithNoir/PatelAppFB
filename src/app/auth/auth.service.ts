import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal(false);

  constructor(private router: Router) { }

  login(user: any) {
    // En una aplicación real, aquí validarías las credenciales del usuario
    // contra un backend. Por ahora, simularemos un inicio de sesión exitoso.
    localStorage.setItem('user', JSON.stringify(user));
    this.isAuthenticated.set(true);
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('user');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
