import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductcardComponent } from "./components/productcard/productcard.component";
import { SharedModule } from "../shared/shared.module";
import { ShoppingbagComponent } from "./components/shoppingbag/shoppingbag.component";
import { OrdersummaryComponent } from "./components/ordersummary/ordersummary.component";
import { EditproductComponent } from "./components/editproduct/editproduct.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ProductcardComponent,
    ShoppingbagComponent,
    OrdersummaryComponent,
    EditproductComponent
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [ProductcardComponent, ShoppingbagComponent, EditproductComponent],
  entryComponents: [EditproductComponent]
})
export class FeatureModule {}
