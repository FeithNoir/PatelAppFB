import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<aside class="bg-gray-800 text-white w-64 p-4">Sidebar</aside>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
