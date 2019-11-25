import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailsComponent } from './category-details.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class CategoryDetailsRoutingModule { }
