import { Pipe, PipeTransform } from '@angular/core';

interface Product {
  id: number;
  title: string;
  category: string;
  weight: number;
  price:number;
}

@Pipe({
  name: 'searchfilter',
  standalone: true
})
export class SearchfilterPipe implements PipeTransform {

 transform(items: Product[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.title.toLowerCase().includes(searchText) ||
             item.category.toLowerCase().includes(searchText) ||
             item.price.toString().toLowerCase().includes(searchText);
    });
  }

}
