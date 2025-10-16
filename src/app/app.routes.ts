import { Routes } from '@angular/router';
import { CakeListComponent } from './cakes/cake-list/cake-list';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'cakes', pathMatch: 'full' },
    { path: 'cakes', component: CakeListComponent },
    { path: 'cake/:id', component: CakeDetailComponent },
];
