import { Injectable, signal } from '@angular/core';
import { Cake } from './cake.model';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private cakes = signal<Cake[]>([
    {
      id: 1,
      name: 'Pastel de chocolate',
      description: 'Delicioso pastel de chocolate con varias capas de bizcocho y crema.',
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Pastel de fresa',
      description: 'Pastel ligero y esponjoso con fresas frescas y crema batida.',
      imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Pastel de zanahoria',
      description: 'Pastel húmedo y especiado con glaseado de queso crema.',
      imageUrl: 'https://images.unsplash.com/photo-1629140327339-616c69707107?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Cheesecake de arándanos',
      description: 'Cheesecake cremoso con una base de galleta y una capa de arándanos.',
      imageUrl: 'https://images.unsplash.com/photo-1535146014020-e17c3732c589?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]);

  getCakes() {
    return [...this.cakes()];
  }

  getCake(id: number) {
    return this.cakes().find(cake => cake.id === id);
  }
}
