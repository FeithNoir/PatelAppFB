export type IngredientStatus = 'sin empezar' | 'abierto' | 'agotado';
export type IngredientUnit = 'kg' | 'g' | 'l' | 'ml' | 'unidades';

export interface Ingredient {
  id: string; // Código único del producto
  name: string;
  brand: string;
  unit: IngredientUnit;
  price: number;
  status: IngredientStatus;
  expiryDate: Date;
  openedDate?: Date;
  notes?: string;
}
