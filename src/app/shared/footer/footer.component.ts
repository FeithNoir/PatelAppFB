import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="bg-white shadow p-4 mt-auto">Footer</footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
