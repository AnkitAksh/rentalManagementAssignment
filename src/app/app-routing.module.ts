import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule) },
  { path: 'category', loadChildren: () => import('./main/category/category.module').then(m => m.CategoryModule) },
  {
    path: 'categoryDetails', loadChildren: () => import('./main/category-details/category-details.module')
      .then(m => m.CategoryDetailsModule)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
