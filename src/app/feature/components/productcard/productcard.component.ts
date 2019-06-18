import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-productcard",
  templateUrl: "./productcard.component.html",
  styleUrls: ["./productcard.component.scss"]
})
export class ProductcardComponent implements OnInit {
  @Input("product") product: Product;
  @Output("editProduct") editProduct = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  editProd(id: string) {
    this.editProduct.emit(id);
  }
}
