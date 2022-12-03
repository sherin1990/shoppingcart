import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public bookList = new BehaviorSubject<any>([])
  quantity: any;
  grandTotal !: number;

  constructor() { }
  getBook() {
    return this.bookList.asObservable();
  }
  setBook(book: any) {
    this.cartItemList.push(...book);
    this.bookList.next(book);
  }

  addtoCart(book: any) {
    this.cartItemList.push(book);
    this.bookList.next(this.cartItemList);
    this.getTotalPrice();
    // this.getTotalCost();
    console.log(this.cartItemList)
    
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += (a.total);
    })
    return grandTotal;
  }

  // getTotalPrice(): number {
  //   let grandTotal = 0;
  //   this.cartItemList.foreach((item => {
  //    this.totalPrice += (item.book.price * item.quantity);
  //   });
  
  // }


  removeCartItem(book: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (book.bookId === a.bookId) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.bookList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.bookList.next(this.cartItemList);

  }

  // getTotalCost(): number {
  //   let totalSum = 0;
  //   for (var i = 0; i < this.cartItemList.length; i++) {
  //     this.cartItemList[i].price;
  //   totalSum = this.cartItemList[i].price * this.cartItemList[i].quantity;
  //   }
  //   return totalSum;
  // }
}












