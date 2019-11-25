import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as SampleJson from '../../../assets/catalog.json';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesSource = new BehaviorSubject<any>('');
  currentCategory = this.categoriesSource.asObservable();

  constructor() { }

  getCategories() {
    return SampleJson;
  }

  shareSelectedCategoryDetails(categories: any) {
    this.categoriesSource.next(categories);
  }
}
