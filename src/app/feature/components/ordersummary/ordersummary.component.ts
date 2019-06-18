import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-ordersummary",
  templateUrl: "./ordersummary.component.html",
  styleUrls: ["./ordersummary.component.less"]
})
export class OrdersummaryComponent implements OnInit {
  public subtotal: number;
  public currency: string;
  public discount: number;
  public shippingCharges: number;
  public additionalDiscount: number;
  constructor(private productService: ProductService) {
    this.discount = 0;
    this.subtotal = 0;
    this.additionalDiscount = 0;
    this.productService.prodSubject.subscribe(products => {
      this.additionalDiscount = 0;
      this.subtotal = 0;
      let quantity = 0;
      debugger;
      products.map(product => {
        quantity += product.quantity;
        this.subtotal += product.price * product.quantity;
        this.currency = product.currency;
      });
      this.subtotal > 50
        ? (this.shippingCharges = 0)
        : (this.shippingCharges = 5);
      if (quantity > 10) {
        this.additionalDiscount = this.subtotal * 0.25;
      } else if (quantity > 6) {
        this.additionalDiscount = this.subtotal * 0.1;
      } else if (quantity == 3) {
        this.additionalDiscount = this.subtotal * 0.05;
      } else {
        this.additionalDiscount = 0;
      }
      this.additionalDiscount = Math.round(this.additionalDiscount * 100) / 100;
      this.productService.updateQty(quantity);
    });
  }

  ngOnInit() {}

  onPromotionCodeApply(code: string) {
    code == "JF10" ? (this.discount = 7) : (this.discount = 0);
  }

  get total() {
    return (
      this.subtotal -
      this.discount +
      this.shippingCharges -
      this.additionalDiscount
    );
  }
}
