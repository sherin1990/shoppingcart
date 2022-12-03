import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  public totalItem :number = 0; 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getBook()
    .subscribe(res=>{
      this.totalItem = res.length;

    })
  }

}
