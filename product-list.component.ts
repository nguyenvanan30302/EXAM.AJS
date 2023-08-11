import { Component } from '@angular/core';
import itemsData from './items.json';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent {
  items: any[] = itemsData;
  filteredItems: any[] = [];

  searchInput: string = '';
  categoryInput: string = '';

  filterItems(): void {
    this.filteredItems = this.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchInput.toLowerCase());
      const matchesCategory = !this.categoryInput || item.category.toLowerCase() === this.categoryInput.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }
}
