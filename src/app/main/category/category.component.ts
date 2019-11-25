import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CategoryService } from '../service/category.service.js';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategories: any;
  selectedSubCategories: NavigationExtras;

  constructor(private route: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.currentCategory.subscribe(data => {
      this.selectedCategories = data;
    });
  }

  public onCategoryClick(categoryDetails: any) {
    this.selectedSubCategories = categoryDetails;
    this.route.navigate(['/categoryDetails'], this.selectedSubCategories);
  }

}
