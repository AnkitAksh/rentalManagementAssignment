import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  categoryDetails: any;

  constructor(private router: Router) {
    this.categoryDetails = this.router.getCurrentNavigation().extras;
  }

  ngOnInit() {
  }

}
