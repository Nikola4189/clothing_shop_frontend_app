import { Component, Inject, OnInit } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product.model';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-article-info-dialog',
  templateUrl: './article-info-dialog.component.html',
  styleUrl: './article-info-dialog.component.css'
})
export class ArticleInfoDialogComponent implements OnInit{
  
  article!: Product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public clothingService: ClothingService, public userService: UserService) {}

  ngOnInit(): void {

    console.log('Prosleđeni podaci:', this.data);

    if (this.data && this.data.article) {

    this.article = {
      product_id: this.data.article[0].product_id,
      title: this.data.article[0].title,
      image: this.data.article[0].image,
      gender: this.data.article[0].gender,
      category: this.data.article[0].category,
      size: this.data.article[0].size,
      manufacturer: this.data.article[0].manufacturer,
      product_date: this.data.article[0].product_date,
      description: this.data.article[0].description ? this.data.article[0].description : "Nema opisa !",
      price: this.data.article[0].price,
      user_reviews: this.data.article[0].user_reviews
    } 

  }else {
    console.error('Podaci nisu prosleđeni ili su neispravni');
  }
    
  }
}
