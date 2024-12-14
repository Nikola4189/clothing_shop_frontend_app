import { Injectable } from '@angular/core';
import { User } from '../auth/user.service';
import { ShoppingOrder } from './shoppingOrder.model';
import { ItemList } from './itemList.model';
import { Product } from '../clothing/product.model';

export interface Cart {
  cart_id: number;
  user_id: number;
  orders?: ShoppingOrder[];
}


@Injectable()
export class ShoppingService {

  constructor() { }

  // Inicijalizacija trenutne korpe
  currentCart: Cart = ShoppingService.dummyCartList[0];

  currentOrder: ShoppingOrder | undefined = this.currentCart.orders?.find(order => order.status != "arrived" && order.status != "rejected"); // za sve statuse (order => order.status === undefined)

  static dummyCartList: Array<Cart> = [
    {cart_id: 0, user_id: 0},
    {cart_id: 1, user_id: 2},
    {cart_id: 2, user_id: 1, orders: [{shopping_order_id: 0,item_list: 
      [{id: 0, item: 
        {product_id: 1, title:'Cotton super boxers', image: 'clothing/assets/gucci_boxers.jpeg', gender: 'child', category: 'underwear', size: ['XS', 'S'], manufacturer: 'Nike', product_date: new Date("2022-04-18 14:23"), price: 205,
          user_reviews: [
            {review_id: 0, user_id: 2, comment: "Best buy ! :)", rating: 5},
            {review_id: 1, user_id: 1, comment: "Nice shop ! :)", rating: 3},
            {review_id: 2, user_id: 3, comment: "Best buy ! :)", rating: 4},
            {review_id: 3, user_id: 2, comment: "Everything is fine with the product, but the design is boring.)", rating: 2},
      ]
   },
    count: 2, sum_price: 410 }], status: 'rejected', total_price: 410, date: new Date()}]}, 
  ];

  // Pronalazi i vraca korpu prema user_id - getCartByUserId()
  getCartByUserId(user_id: number): Cart {
    var foundCart!: Cart;

    ShoppingService.dummyCartList.forEach((cart) => {
      if(cart.user_id === user_id){
        foundCart = cart;
      }
    });
    
    this.currentCart = foundCart;
    return foundCart;
  }

  // Kreira novu, jedinstvenu korpu pri registraciji korisnika - createCart()
  createCart(user_id: number) {
    var maxId: number = 0;
    ShoppingService.dummyCartList.forEach(cart => {
      if(maxId < cart.cart_id)
        maxId = cart.cart_id;
    });

    var cart_id = ++maxId;
    var cart: Cart = {cart_id, user_id};

    ShoppingService.dummyCartList.push(cart);

    console.log(cart);
    
    return cart;
  }
  //Vraca trenutno aktivnu porudzbinu - getCurrentOrders()
  getCurrentOrders() {
    return this.currentOrder;
  }

// Pokrece se samo u slucaju kada nema nijedne 'order' sa statusom 'undefined' pritiskom na dugme Buy
  // Kreira novi objekat tipa ShoppingOrder unutar liste, u okviru jedinstvene korpe kupca - createNewOrder()
  createNewOrder(user_id: number){
    let temporaryCart = this.getCartByUserId(user_id);

    let newOrder: ShoppingOrder = {
      shopping_order_id: this.generateId("order"),
      item_list: [],
      total_price: 0,
      status: undefined,
      date: new Date()
    };

    if (!temporaryCart.orders) {
      temporaryCart.orders = [];
    }
    temporaryCart.orders.push(newOrder);
  }

  // Kreira i vraca item za dodavanje - getCreatedItem()
  getCreatedItem(product: Product): ItemList {
    let newItem: ItemList = {
      id: this.generateId("item"),
      item: product,
      count: 1,
      sum_price: 0
    };
    return newItem;
  }

  // Dodaje novu vrstu artikla u porudzbinu - addItemInOrder()
  addItemInOrder(product: Product) {

    let item: ItemList = this.getCreatedItem(product); 

    if (this.currentOrder && this.currentOrder.status === undefined) {
      this.currentOrder.item_list.push(item);
      this.currentOrder.total_price += item.sum_price;
      
    }
  }

  // Uklanja item iz porudzbine - removeItemFromOrder()
  removeItemFromOrder(item_id: number) {
    if (this.currentOrder && this.currentOrder.status === undefined) {

      const index = this.currentOrder.item_list.findIndex(item => item.id === item_id);

      if (index !== -1) {

        this.currentOrder.total_price -= this.currentOrder.item_list[index].sum_price;
        this.currentOrder.item_list.splice(index, 1);

      }
    }
  }

  // Vraca pojedinacan objekat tipa ItemList iz porudzbine - getItemFromOrder()
  getItemFromOrder(item_id: number): ItemList | undefined {

    if (this.currentOrder) {

      return this.currentOrder.item_list.find(item => item.id === item_id);
    }
    return undefined;
  }

  // Vraca broj artikala u porudzbini - getCountItemsInOrder()
  getCountItemsInOrder(){

    const undefinedStatusOrder = this.currentOrder; //currentCart.orders?.find(order => order.status === undefined)

    // Vraća dužinu item_list niza ako postoji takva porudžbina, inače vraća 0
    return undefinedStatusOrder ? undefinedStatusOrder.item_list.length : 0;
  }

  // Izracunava i postavlja ukupnu cenu itema - getSumPriceForItem()
  setSumPriceForItem(item_id: number){
    
    if (! (this.currentOrder && this.currentOrder.status === undefined)) {
      return;
    }

    const item =  this.currentOrder.item_list.find(item => item.id === item_id);
    if (item) {
      const totalPrice = item.count * item.item.price;
      item.sum_price = totalPrice; 
    }
  }
  

  // Izracunava i postavlja ukupnu cenu porudzbine - getOrderTotalPrice()
  setOrderTotalPrice() {
    if (this.currentOrder && this.currentOrder.status === undefined) {
      let total_price = 0;
      this.currentOrder.item_list.forEach(item => {
        total_price += item.sum_price;
      });
      this.currentOrder.total_price = total_price;
    }
  }
  
  // Postavlja vrednost stanja porudzbine i otkljucava dodatne dugmice u zavisnosti od parametra - setStateOrder()
  setStateOrder(status: 'during' | 'arrived' | 'rejected') {
    if (this.currentOrder) {
      switch (status) {
        case 'during': 
          this.currentOrder.status = "during";
          break;
        case 'arrived':
          this.currentOrder.status = "arrived";
          break;
        case 'rejected':
          this.currentOrder.status = "rejected";
          break;
      }
    }
  }
  

  //Generise novi ID za novu Order - generateOrderId()
  private generateId(currentObject: String): number {
    let maxId = 0;
  
    if (currentObject === "order") {
      this.currentCart.orders?.forEach(order => {
        if (order.shopping_order_id > maxId) {
          maxId = order.shopping_order_id;
        }
      });
    } else if (currentObject === "item" && this.currentOrder) {
      this.currentOrder.item_list?.forEach(item => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });
    }
  
    return maxId + 1;
  }
  

}
