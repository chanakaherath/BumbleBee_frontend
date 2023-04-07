import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.css']
})
export class ProductFormUpdateComponent implements OnInit{

  id : string = "";
  product : Product = new Product();

  constructor(private productService : ProductService,
    private route : ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data=> {
      this.product = data;
      console.log(this.product);
    },
    error=> console.log(error));
  }

  onSubmit() {
    this.productService.updateProduct(this.product).subscribe(data=> {
      console.log(this.product);
      this.goToProductList();
    },
    error => console.log(error));
  }

  goToProductList() {
    this.router.navigate(['/product']);
  }

}
