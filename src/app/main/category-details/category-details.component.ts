import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  subCategories: any;

  constructor(private categoryService: CategoryService) {
    this.categoryService.currentCategory.subscribe(data => {
      this.subCategories = data;
    });
  }

  ngOnInit() {
    this.categoryService.currentCategory.subscribe(data => {
      this.subCategories = data;
    });
  }

}
