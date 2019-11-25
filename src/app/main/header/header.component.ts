import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  catalogData: any;
  constructor(private route: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.catalogData = this.categoryService.getCategories();
  }

  public onBranchNameClick(categoryDetails: any) {
    this.categoryService.shareSelectedCategoryDetails(categoryDetails);
    this.route.navigate(['/category']);
  }
}
