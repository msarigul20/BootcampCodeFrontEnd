import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];
  currentCategory : Category;
  cleanCategory:Category = {categoryId:0, categoryName:"All"}
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.clearCurrentCategory();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
    }); 
  }
  setCurrentCategory(category:Category){
    this.currentCategory =category;
  }

  clearCurrentCategory(){
    this.currentCategory = this.cleanCategory;
  }
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllCategoryClass(){
    if(this.currentCategory.categoryId==0){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
