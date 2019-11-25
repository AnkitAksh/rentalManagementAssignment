import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service.js';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.currentCategory.subscribe(data => {
      this.selectedCategories = data;
    });
  }

  public onCategoryClick(categoryDetails: any) {
    this.categoryService.shareSelectedCategoryDetails(categoryDetails);
  }

}
