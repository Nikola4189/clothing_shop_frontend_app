import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingOrder } from './shoppingOrder.model';
import { ShoppingService } from './shopping.service';
import { ItemList } from './itemList.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})


export class ShoppingCartComponent implements OnInit{

  displayedColumns: string[] = ['date', 'item_list', 'total_price', 'status', 'actions'];

  orders: ShoppingOrder[];

  editable: Boolean = true;

  constructor( public dataSource: MatTableDataSource<ShoppingOrder>, public shopping: ShoppingService ) {

  this.orders = this.shopping.currentCart.orders ? this.shopping.currentCart.orders : 
      [{shopping_order_id: 0,item_list: 
        [{id: 0, item: 
          {product_id: 1, title:'Cotton super boxers', image: 'clothing/assets/gucci_boxers.jpeg', gender: 'child', category: 'underwear', size: ['XS', 'S'], manufacturer: 'Nike', product_date: new Date("2022-04-18 14:23"), price: 205,
            user_reviews: [
              {review_id: 0, user_id: 2, comment: "Best buy ! :)", rating: 5},
              {review_id: 1, user_id: 1, comment: "Nice shop ! :)", rating: 3},
              {review_id: 2, user_id: 3, comment: "Best buy ! :)", rating: 4},
              {review_id: 3, user_id: 2, comment: "Everything is fine with the product, but the design is boring.)", rating: 2},
        ]
 },
  count: 2, sum_price: 410 }],status: 'rejected', total_price: 410, date: new Date()}];
    
    this.dataSource = new MatTableDataSource(this.orders);
    console.log(this.orders);
   }

  ngOnInit(): void {
    this.refreshTable();
  }

  // Refresuje tabelu - refreshTable()
  refreshTable() {
    this.dataSource.data = this.orders;
  }

  //Potvrda porudzbine - confirmOrder()
  confirmOrder(): void {
    if(this.shopping.currentOrder?.status === undefined){
      this.shopping.setStateOrder("during");
      this.editable = false;
    }
  }

  // Uklanja item - removeItem()
  removeItem(orderId: number, itemId: number) {
    const order = this.orders.find(o => o.shopping_order_id === orderId);
    if (order) {
      this.shopping.removeItemFromOrder(itemId);
      this.shopping.setOrderTotalPrice(); 
      this.refreshTable();
    }
  }

  // Potvrda prijema porudzbine - markAsReceived()
  markAsReceived(): void {
    this.shopping.setStateOrder("arrived");
  }

  // Otkazivanje porudzbine - cancelOrder()
  cancelOrder(): void {
    this.shopping.setStateOrder("rejected");
  }

  // Uredjuje porudzbinu - editOrder()
  editOrder(order: ShoppingOrder): void {
   console.log("Logika za uredjivanje porudzbine.");
  }
  // Postavlja vrednost brojaca iz inputa tabele - updateItemCount()
  updateItemCount(item: ItemList) {
    const newCount = item.count;

    const order = this.orders.find(o => o.shopping_order_id === item.id);
    if (order) {
      const currentItem = order.item_list.find(i => i.id === item.id);
      if (currentItem) {
        currentItem.count = newCount;
        currentItem.sum_price = currentItem.count * currentItem.item.price;
        this.shopping.setOrderTotalPrice();
        this.refreshTable();
      }
    }
  }

}
