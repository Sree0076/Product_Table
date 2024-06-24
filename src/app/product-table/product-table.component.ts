import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from '../Pipeline/searchfilter.pipe';
import { ProductdirectivesDirective } from '../directive/productdirectives.directive';

interface Product {
  id: number;
  title: string;
  category: string;
  weight: number;
  price:number;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [FormsModule,SearchfilterPipe,ProductdirectivesDirective],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {
  Products: Product[] = [];
  search_item: any;
toFilter: any;
  ngOnInit() {
   this.fetchData();
 }

 fetchData = async () => {
   try {
     const response = await fetch('https://dummyjson.com/products');
     const data = await response.json();
     this.Products = data.products;
     const categories = this.Products.map(product => product.category);
   } catch (error) {
     console.error('Error fetching data:', error);
   }
   console.log(this.Products);
 };

}
