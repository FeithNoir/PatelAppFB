import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./components/cart/cart').then(m => m.CartComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./auth/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuard]
    },
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout').then(m => m.CheckoutComponent),
        canActivate: [authGuard]
    },
    {
        path: 'inventory',
        loadComponent: () => import('./pages/inventory/inventory').then(m => m.InventoryComponent),
        canActivate: [authGuard]
    },
];
