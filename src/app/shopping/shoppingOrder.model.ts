import { ItemList } from "./itemList.model";

export interface ShoppingOrder {

    // Definisanje indeksnog potpisa 
    [key: string]: any;

   shopping_order_id: number;
   item_list: ItemList[];
   total_price: number;
   status?: 'during' | 'arrived' | 'rejected';
   date: Date;

  }