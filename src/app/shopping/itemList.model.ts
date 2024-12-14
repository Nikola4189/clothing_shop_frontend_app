import { Product } from "../clothing/product.model";

  export interface ItemList { //Itemi koji se dodaju u order

    // Definisanje indeksnog potpisa 
    [key: string]: any;

    id: number;
    item: Product;
    count: number;
    sum_price: number;
  }