import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  implements OnInit{
  public books: any = [];
  public grandTotal !: number;
  // public totalSum !: number;
  // public totalCost !: number;
   public cartItemList: any;
  constructor(private cartService: CartService) { }


  ngOnInit(): void {

    this.cartService.getBook()
      .subscribe(res => {
        this.books = res;
        this.grandTotal= this.cartService.getTotalPrice();
        // this.totalSum= this.cartService.getTotalCost();
      })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
  // inc(item: any) {
  //   if (item.quantity != 5) {
  //     item.quantity += 1;
  //   }

  // // }
  // dec(item: any) {
  //   if (item.quantity != 1) {
  //     item.quantity -= 1;
  //   }

  // }


  inc(item: any) {
    item.quantity++;
    console.log(item);
  }
  dec(item: any) {
    item.quantity--;
    console.log(item);
  }
  
}
