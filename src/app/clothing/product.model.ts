import { UserReview } from "./userReview.model";

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

  export interface Product {

    // Definisanje indeksnog potpisa 
    [key: string]: any;

    product_id: number;
    title: string;
    image: string;
    gender: 'man' | 'child' | 'woman';
    category: 'underwear' | 'nightsuit' | 'track suit' | 'shorts' | 'skirt' | 'robe' | 'trousers' | 'jacket' | 'blazer' | 'jeans' | 'sweater' | 'dress' | 'coat' | 'shirt' | 't-shirt' | 'shoes' ;
    size: Size[];
    manufacturer: 'Nike' | 'Adidas' | 'Underarmor' | 'Sergio Tacchini' | 'Gucci' | 'GIGI' | 'Brioni' | 'Hugo' | 'Tommy Hilfiger' | 'Zara' | 'Puma' | 'Hugo Boss' | 'Chanel' | 'Burberry' ; 
    product_date: Date;
    description?: string;
    price: number;
    user_reviews?: UserReview[];
  }
  