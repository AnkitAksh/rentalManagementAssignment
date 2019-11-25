import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDetailsRoutingModule } from './category-details-routing.module';
import { CategoryDetailsComponent } from './category-details.component';

@NgModule({
  declarations: [CategoryDetailsComponent],
  imports: [
    CommonModule,
    CategoryDetailsRoutingModule
  ],
})
export class CategoryDetailsModule { }
