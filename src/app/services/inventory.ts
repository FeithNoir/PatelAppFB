import { Injectable, computed, signal } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Ingredient } from '../interfaces/ingredient';

// Mock data for ingredients
const MOCK_INGREDIENTS: Ingredient[] = [
  {
    id: 'HRN-001',
    name: 'Harina de Trigo',
    brand: 'La Espiga de Oro',
    unit: 'kg',
    price: 1.5,
    status: 'sin empezar',
    expiryDate: new Date('2024-12-31'),
  },
  {
    id: 'AZC-002',
    name: 'Azúcar Blanca Refinada',
    brand: 'Dulce Caña',
    unit: 'kg',
    price: 2.1,
    status: 'abierto',
    expiryDate: new Date('2025-06-30'),
    openedDate: new Date('2024-05-10'),
    notes: 'Almacenar en lugar seco.',
  },
  {
    id: 'CHC-003',
    name: 'Chocolate Amargo 70%',
    brand: 'Cacao Real',
    unit: 'g',
    price: 4.5,
    status: 'agotado',
    expiryDate: new Date('2024-08-20'),
    openedDate: new Date('2024-04-01'),
  },
  {
    id: 'LCH-004',
    name: 'Leche Entera',
    brand: 'Vaca Feliz',
    unit: 'l',
    price: 0.9,
    status: 'abierto',
    expiryDate: new Date('2024-05-25'),
    openedDate: new Date('2024-05-20'),
  },
];

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private readonly _ingredients = signal<Ingredient[]>([]);
  private readonly _loading = signal<boolean>(false);

  public readonly ingredients = this._ingredients.asReadonly();
  public readonly loading = this._loading.asReadonly();

  constructor() {
    this.loadIngredients();
  }

  loadIngredients() {
    this._loading.set(true);
    of(MOCK_INGREDIENTS)
      .pipe(delay(1000)) // Simulate network latency
      .subscribe(ingredients => {
        this._ingredients.set(ingredients);
        this._loading.set(false);
      });
  }

  addIngredient(ingredient: Omit<Ingredient, 'id'>) {
    const newIngredient: Ingredient = {
      ...ingredient,
      id: `ING-${Date.now().toString().slice(-5)}`,
    };
    this._ingredients.update(current => [...current, newIngredient]);
    return of(newIngredient).pipe(delay(300)); // Simulate async operation
  }

  updateIngredient(updated: Ingredient) {
    this._ingredients.update(current =>
      current.map(ing => (ing.id === updated.id ? updated : ing))
    );
    return of(updated).pipe(delay(300));
  }

  deleteIngredient(id: string) {
    this._ingredients.update(current => current.filter(ing => ing.id !== id));
    return of({ success: true }).pipe(delay(300));
  }
}
