import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form-update',
  templateUrl: './category-form-update.component.html',
  styleUrls: ['./category-form-update.component.css']
})
export class CategoryFormUpdateComponent implements OnInit {

  id : string = "";
  category : Category = new Category();

  constructor(private categoryService : CategoryService,
    private route : ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe(data=> {
      this.category = data;
      console.log(this.category);
    },
    error=> console.log(error));
  }

  onSubmit() {
    this.categoryService.updateCategory(this.category).subscribe(data=> {
      console.log(this.category);
      this.goToCategoryList();
    },
    error => console.log(error));
  }

  goToCategoryList() {
    this.router.navigate(['/admin/category']);
  }

}
