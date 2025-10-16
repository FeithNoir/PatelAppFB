import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/ingredient';
import { CommonModule, formatDate } from '@angular/common';

@Component({
  selector: 'app-inventory-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inventory-form.html',
  styleUrls: ['./inventory-form.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryFormComponent {
  private readonly fb = inject(FormBuilder);

  public ingredient = input<Ingredient | null>(null);
  public save = output<Partial<Ingredient>>();
  public close = output<void>();

  public ingredientForm = this.fb.group({
    id: [<string | null>null],
    name: ['', Validators.required],
    brand: [''],
    status: ['sin-empezar', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    unit: ['kg', Validators.required],
    expiryDate: ['', Validators.required],
  });

  ngOnInit() {
    const ingredient = this.ingredient();
    if (ingredient) {
      // Format date to 'yyyy-MM-dd' for the date input
      const ingredientForForm = {
        ...ingredient,
        expiryDate: ingredient.expiryDate ? formatDate(ingredient.expiryDate, 'yyyy-MM-dd', 'en-US') : ''
      };
      this.ingredientForm.patchValue(ingredientForForm);
    }
  }

  onSubmit() {
    if (this.ingredientForm.valid) {
      this.save.emit(this.ingredientForm.value as Partial<Ingredient>);
    }
  }

  onClose() {
    this.close.emit();
  }
}
