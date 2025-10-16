import { Injectable, signal } from '@angular/core';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = signal<User | null>(null);

  login() {
    // Simulate a login by setting a mock user
    const mockUser: User = {
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
    this.currentUser.set(mockUser);
  }

  logout() {
    this.currentUser.set(null);
  }
}
