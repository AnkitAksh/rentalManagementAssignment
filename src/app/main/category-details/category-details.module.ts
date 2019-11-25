import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDetailsComponent } from './category-details.component';
import { CategoryService } from '../service/category.service';


@NgModule({
  declarations: [CategoryDetailsComponent],
  imports: [
    CommonModule
  ],
  providers: [CategoryService],
})
export class CategoryDetailsModule { }
