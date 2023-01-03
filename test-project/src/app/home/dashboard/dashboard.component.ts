import {Component, OnInit} from '@angular/core';
import {ProductData, ProductModel} from "../common/product.data";
import {ActivatedRoute} from "@angular/router";
import {USER_TYPE} from "../../auth/common/UserType.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  products = new ProductData().getProducts();
  USER_TYPE = USER_TYPE;
  userType = USER_TYPE.ADMIN;

  constructor(private route: ActivatedRoute) {
    this.catchUserTypeAndGiveAccess();
  }

  ngOnInit(){
  }

  checkoutProduct(product: any) {
//TODO
  }

  decreaseQuantity(product: ProductModel) {
    if(product?.quantity && product?.quantity > 0){
    product.quantity = product?.quantity - 1;
    }
  }

  increaseQuantity(product: ProductModel) {
    if(product?.quantity){
      product.quantity = product?.quantity + 1;
    }
  }

  private catchUserTypeAndGiveAccess() {
    this.route.queryParamMap.subscribe(params =>{
      const user = params.get('user');
      if(user){
        switch(user){
          case USER_TYPE.ADMIN:
            this.userType = USER_TYPE.ADMIN;
            break;
          case USER_TYPE.CUSTOMER:
            this.userType = USER_TYPE.CUSTOMER;
            break;
          case USER_TYPE.NORMAL_USER:
            this.userType = USER_TYPE.NORMAL_USER;
            break;
        }
      }
    });
  }

  editProduct(product: any) {
    //TODO
  }
}
