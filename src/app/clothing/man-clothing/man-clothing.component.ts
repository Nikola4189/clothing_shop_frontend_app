import { Component } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { ClothingComponent } from '../clothing.component';

@Component({
  selector: 'app-man-clothing',
  templateUrl: './man-clothing.component.html',
  styleUrl: './man-clothing.component.css'
})
export class ManClothingComponent {

  constructor(public products: ClothingService, public action: ClothingComponent ) {}

  public manArticles = this.products.getGenderProduct('man');

  isReserveActive = this.action.isBuyActive;

  onView(id: number) { this.action.onView(id) };

  reserve(id: number) { this.action.reserve(id) };

}
