import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";

import { ProductTableComponent } from "./product-table/product-table.component";

interface Product {
  id: number;
  name: string;
  category: string;
  weight: number;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,AdminComponent,  ProductTableComponent]
})

export class AppComponent {
  title = 'frontend';
  name="sreejith";
  isAdmin:boolean =true;
  uniqueCategories: string[] = [];


 filter_data: Product[] = [];
 Products: Product[] = [];
 ngOnInit() {
  this.fetchData();
}

fetchData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    this.Products = data.products;
    const categories = this.Products.map(product => product.category);
    const categorySet = new Set(this.Products.map(product => product.category));
    this.uniqueCategories = Array.from(categorySet);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  console.log(this.uniqueCategories);
};

getProductsByCategory(category: string): Product[] {
  return this.Products.filter(product => product.category === category);
}

}
