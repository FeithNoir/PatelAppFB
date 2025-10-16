import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { InventoryService } from '../../services/inventory';
import { Ingredient } from '../../interfaces/ingredient';
import { InventoryFormComponent } from '../../components/inventory-form/inventory-form';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, DatePipe, InventoryFormComponent],
})
export class InventoryComponent {
  private readonly inventoryService = inject(InventoryService);

  public ingredients = this.inventoryService.ingredients;
  public loading = this.inventoryService.loading;
  
  public isFormVisible = signal(false);
  public editingIngredient = signal<Ingredient | null>(null);

  addIngredient() {
    this.editingIngredient.set(null);
    this.isFormVisible.set(true);
  }

  editIngredient(ingredient: Ingredient) {
    this.editingIngredient.set(ingredient);
    this.isFormVisible.set(true);
  }

  closeForm() {
    this.isFormVisible.set(false);
    this.editingIngredient.set(null);
  }

  saveIngredient(ingredientData: Partial<Ingredient>) {
    const currentIngredient = this.editingIngredient();
    if (currentIngredient) {
      // Update existing ingredient
      const updatedIngredient: Ingredient = { 
        ...currentIngredient, 
        ...ingredientData 
      };
      this.inventoryService.updateIngredient(updatedIngredient);
    } else {
      // Add new ingredient, ensuring no ID is passed
      const { id, ...newIngredientData } = ingredientData;
      this.inventoryService.addIngredient(newIngredientData as Omit<Ingredient, 'id'>);
    }
    this.closeForm();
  }

  deleteIngredient(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este ingrediente?')) {
      this.inventoryService.deleteIngredient(id);
    }
  }
}
