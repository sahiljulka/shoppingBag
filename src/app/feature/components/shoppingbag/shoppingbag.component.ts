import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { EditproductComponent } from "../editproduct/editproduct.component";

@Component({
  selector: "app-shoppingbag",
  templateUrl: "./shoppingbag.component.html",
  styleUrls: ["./shoppingbag.component.scss"]
})
export class ShoppingbagComponent implements OnInit {
  public productItems$;
  public quantity;
  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    this.productItems$ = this.productService.getProducts();
    this.productService.prodSubject.subscribe(products => {
      this.quantity = 0;
      products.map(prod => {
        this.quantity += prod.quantity;
      });
    });
  }

  ngOnInit() {}

  editProd(id): void {
    const dialogRef = this.dialog.open(EditproductComponent, {
      width: "550px",
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(product => {
      this.productService.updateProduct(product);
    });
  }
}
