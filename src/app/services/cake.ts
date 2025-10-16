
import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

export type CakeCategory = 'Pastel' | 'Cheesecake' | 'Especial';

export interface Cake {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: CakeCategory;
}

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private _cakes = signal<Cake[]>([]);
  public cakes = this._cakes.asReadonly();

  private _loading = signal<boolean>(false);
  public loading = this._loading.asReadonly();

  private allCakes: Cake[] = [
        {
      id: 1,
      name: 'Pastel de Chocolate',
      price: 25.99,
      imageUrl: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Un delicioso pastel de chocolate con una rica cobertura de fudge.',
      category: 'Pastel'
    },
    {
      id: 2,
      name: 'Pastel de Fresa',
      price: 22.50,
      imageUrl: 'https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Un pastel ligero y esponjoso con fresas frescas y crema batida.',
      category: 'Pastel'
    },
    {
      id: 3,
      name: 'Cheesecake de Arándanos',
      price: 28.00,
      imageUrl: 'https://images.pexels.com/photos/3674176/pexels-photo-3674176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Un cheesecake cremoso con una salsa de arándanos casera.',
      category: 'Cheesecake'
    },
    {
      id: 4,
      name: 'Pastel de Zanahoria',
      price: 24.75,
      imageUrl: 'https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Un pastel de zanahoria húmedo y especiado con un glaseado de queso crema.',
      category: 'Especial'
    },
    {
      id: 5,
      name: 'Pastel Red Velvet',
      price: 26.50,
      imageUrl: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Un clásico pastel red velvet con un glaseado de queso crema aterciopelado.',
      category: 'Especial'
    },
    {
      id: 6,
      name: 'Pastel de Limón y Amapola',
      price: 23.00,
      imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Un pastel refrescante de limón con semillas de amapola y un glaseado de limón.',
      category: 'Pastel'
    }
  ];

  getCakes(): void {
    this._loading.set(true);
    of(this.allCakes).pipe(
      delay(1500),
      finalize(() => this._loading.set(false))
    ).subscribe(cakes => {
      this._cakes.set(cakes);
    });
  }

  getCakeById(id: number): Observable<Cake | undefined> {
    const cake = this.allCakes.find(c => c.id === id);
    return of(cake);
  }

  getCategories(): CakeCategory[] {
    return ['Pastel', 'Cheesecake', 'Especial'];
  }
}
