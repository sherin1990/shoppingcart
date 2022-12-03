import { Component,OnInit } from '@angular/core';
import { BookapiService } from 'src/app/services/bookapi.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public bookList: any;

  constructor(private api: BookapiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getBook()
      .subscribe(res => {
        this.bookList = res;
        this.bookList.forEach((a:any)=> {
          Object.assign(a,{quantity:1, total:a.price});
      });
    })
  }

  // imageArray = [
  //   {
  //     img: "../../assets/HP2.jpg",
  //   },
  //   {
  //     img: "../../assets/HP3.jpg",
  //   },
  //   {
  //     img: "../../assets/HP4.jpg",
  //   },
  //   {
  //     img: "../../assets/HP5.jpg",
  //   },
  //   {
  //     img: "../../assets/HP6.jpg",
  //   },
  //   {
  //     img: "../../assets/HP7.jpg",
  //   },
  //   {
  //     img: "../../assets/HP1.jpg",
  //   },
  // ];

  addtoCart(item :any){
    this.cartService.addtoCart(item);

  }
}


