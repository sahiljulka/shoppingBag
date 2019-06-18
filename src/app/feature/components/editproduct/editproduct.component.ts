import { Component, OnInit, Inject } from "@angular/core";
import { Product } from "../../models/product.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-editproduct",
  templateUrl: "./editproduct.component.html",
  styleUrls: ["./editproduct.component.less"]
})
export class EditproductComponent implements OnInit {
  product: Product;
  constructor(
    public dialogRef: MatDialogRef<EditproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private productService: ProductService
  ) {
    this.productService.getProducts().subscribe(products => {
      this.product = JSON.parse(
        JSON.stringify(products.filter(p => p.id == data.id)[0])
      );
    });
  }

  ngOnInit() {}

  onClick() {
    console.log(this.product);
  }
}
