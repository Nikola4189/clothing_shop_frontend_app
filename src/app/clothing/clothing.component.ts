//Uvodjenje novog tipa koji govori o tome da kljuc mora biti tipa string a vredenosti mogu biti 'string' ili 'broj'
type FilterValues = Record<string, string | number>;

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClothingService } from './clothing.service';
import { MatDialog } from '@angular/material/dialog';
import { AddInfoDialogComponent } from './add-info-dialog/add-info-dialog.component';
import { UserService } from '../auth/user.service';
import { ArticleInfoDialogComponent } from './article-info-dialog/article-info-dialog.component';
import { Product } from './product.model';
import { ShoppingService } from '../shopping/shopping.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})


export class ClothingComponent implements OnInit{

  constructor(public products: ClothingService, private cdRef: ChangeDetectorRef, public dialog: MatDialog, public userService: UserService, public shoppingService: ShoppingService ) {}

  /* Promenljive */
  public articles = this.products.getProducts();

  public sizes = this.products.getSizeSet();

  public categories = this.products.getCategories();

  public brands = this.products.getManufacturers();

  public years = [2022, 2023, 2024 ];

  public max_price = this.products.findHighestPrice();

  public stars = [1, 2, 3, 4, 5];

  public isBuyActive =this.userService.getLoggedUser();

   /* Form kontroleri */
   categoryControl = new FormControl('');
   sizeControl = new FormControl('');
   brandControl = new FormControl('');
   seasonControl = new FormControl('');
   ratingControl = new FormControl('');
   priceControl = new FormControl(this.max_price);

  /* Formatiranje vrednosti opsega cene */
  formatLabel(value: number): string {
    
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}$`;
  }

  /* Gasenje forme */
  disableSelect = new FormControl(true);

  labelPosition: 'before' | 'after' = 'before';

  /* Filter form */

  control = new FormControl('');
  articlesTitles: string[] = [];
  filteredTitles: Observable<string[]> | undefined;

  ngOnInit() {
    this.articlesTitles = this.products.getUniqueTitles();
    this.filteredTitles = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.articlesTitles.filter(title => this._normalizeValue(title).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  // Prati naslove proizvoda - trackTitle()
  trackTitle(index: number, item: string): any {
    return item;
  }

    // Dugme za preteragu - onSearch() 
    onSearch(form: NgForm) {
      let filters: FilterValues = {};

  // Prolazi kroz sve kontrolere forme i dodaje ih u filtere ako nisu prazni ili ako polje nije onemogućeno
  Object.keys(form.value).forEach(key => {
    let value = form.value[key];

    if (value !== null && value !== undefined && value !== '' && !form.controls[key].disabled) {
      let filterKey = key === 'brand' ? 'manufacturer' : key;

      // Konvertuje vrednost 'price' u broj ako je tip 'string' (potrebno za slider)
      if (filterKey === 'price' && typeof value === 'string') {
        value = parseFloat(value);
      }

      filters[filterKey] = value;
    }
  });

  console.log(filters);

  // Filtrira niz proizvoda
  let filteredProducts = this.articles.filter(product => {
    return Object.keys(filters).every(key => {
      return product[key] === filters[key];
    });
  });
 

  console.log(filteredProducts);
  console.log(form.value);
  console.log(form)
  return filteredProducts;
    }
    

    // Dugme za reset - resetFilters() 
    resetFilters(form: NgForm) {

      // Resetuje formu na početne vrednosti
      form.resetForm();
  
      // Resetuje pojedinačne form kontrole
      this.categoryControl.setValue('');
      this.sizeControl.setValue('');
      this.brandControl.setValue('');
      this.seasonControl.setValue('');
      this.ratingControl.setValue('');
      this.priceControl.setValue(this.max_price); 
      this.disableSelect.setValue(false);
      this.control.setValue('');

      // Manuelno pokrece proveru promene vrednosti
      this.cdRef.detectChanges();
    }

    // Otvara informacioni dialog o dodavanju artikla u korpu - openAddInfoDialog()
    openAddInfoDialog() {
      this.dialog.open(AddInfoDialogComponent, {
        disableClose: true,
        width: '50vw'
      });
    }

    // Otvara dialog sa informacijama i komentarima - onView()
   public onView(id: number){
    this.dialog.open(ArticleInfoDialogComponent, {
      disableClose: true,
      width: '50vw',
      data: { article: this.products.getProductById(id) }
    });
   }

    // Prebacuje proizvod u korpu - reserve() 
    // Koristi funkcije createNewOrder() ili addItemInOrder() u zavisnosti od slucaja
   //public reserve(id: number, user_id: number){
   public reserve(id: number){
    this.openAddInfoDialog();

    if(this.shoppingService.createCart === undefined){
      console.log("Doslo je do fatalne greske! Korpa nije kreirana tokom procesa registracije korisnika ili je u toku hakerski napad.");
      return;
    }
    
    let item_product:Product[] = this.products.getProductById(id);

    if(!this.shoppingService.currentOrder){
      this.shoppingService.createNewOrder(this.userService.getLoggedUserId());
      this.shoppingService.addItemInOrder(item_product[0]);
    }else{
      this.shoppingService.addItemInOrder(item_product[0]);
    }
   }
}

