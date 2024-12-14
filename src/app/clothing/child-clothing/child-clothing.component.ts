import { Component } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { ClothingComponent } from '../clothing.component';

@Component({
  selector: 'app-child-clothing',
  templateUrl: './child-clothing.component.html',
  styleUrl: './child-clothing.component.css'
})
export class ChildClothingComponent {
  constructor(public products: ClothingService, public action: ClothingComponent ) {}

  public childArticles = this.products.getGenderProduct('child');

  isReserveActive = this.action.isBuyActive;

  onView(id: number) { this.action.onView(id) };

  reserve(id: number) { this.action.reserve(id) };
}
