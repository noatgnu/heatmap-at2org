import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'comparison',
    loadComponent: () => import('./comparison/comparison').then(m => m.ComparisonComponent)
  },
  {
    path: ':dataset',
    loadComponent: () => import('./explorer/explorer').then(m => m.ExplorerComponent)
  },
  {
    path: '',
    redirectTo: 'at2org',
    pathMatch: 'full'
  }
];
