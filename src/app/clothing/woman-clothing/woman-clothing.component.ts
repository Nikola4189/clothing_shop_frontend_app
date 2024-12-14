import { Component } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { ClothingComponent } from '../clothing.component';

@Component({
  selector: 'app-woman-clothing',
  templateUrl: './woman-clothing.component.html',
  styleUrl: './woman-clothing.component.css'
})
export class WomanClothingComponent {
  constructor(public products: ClothingService, public action: ClothingComponent ) {}

  public womanArticles = this.products.getGenderProduct('woman');

  isReserveActive = this.action.isBuyActive;

  onView(id: number) { this.action.onView(id) };

  reserve(id: number) { this.action.reserve(id) };
}
