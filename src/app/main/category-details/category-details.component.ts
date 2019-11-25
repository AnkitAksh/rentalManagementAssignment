import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  categoryDetails: any;

  constructor(private router: Router, private categoryService: CategoryService) {
    this.categoryDetails = this.router.getCurrentNavigation().extras;
  }

  ngOnInit() {
  }

}
