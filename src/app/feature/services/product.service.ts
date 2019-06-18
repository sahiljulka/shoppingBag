import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Observable, of, pipe, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private quantity: number;
  private products: Product[];
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  constructor() {
    this.products = [
      {
        id: "1",
        name: "rugged jean",
        variation: "solid blue",
        url:
          "https://media.istockphoto.com/photos/blue-jeans-isolated-with-clipping-path-picture-id600373506?k=6&m=600373506&s=612x612&w=0&h=foM-oap8DrT2jbZBF1MBvv_25xkDKiPIWztH_1yqpnI=",
        style: "ms13kt1906",
        selectedColor: { name: "blue", hexcode: "#1169BD" },
        selectedSize: { name: "small", code: "s" },
        availableOptions: {
          colors: [
            {
              name: "green",
              hexcode: "#A3D2A1"
            },
            {
              name: "yellow",
              hexcode: "#F9F8E6"
            },
            {
              name: "red",
              hexcode: "#ED99A8"
            }
          ],
          sizes: [
            {
              name: "small",
              code: "s"
            },
            {
              name: "medium",
              code: "m"
            },
            {
              name: "large",
              code: "l"
            },
            {
              name: "extra large",
              code: "xl"
            }
          ]
        },
        quantity: 1,
        originalPrice: 11,
        price: 11,
        currency: "$"
      },
      {
        id: "2",
        name: "cotton tshirt",
        variation: "solid green",
        url:
          "data:image/jpeg;base64,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",
        style: "ms13kt1906",
        selectedColor: { name: "red", hexcode: "#1169BD" },
        selectedSize: { name: "small", code: "s" },
        availableOptions: {
          colors: [
            {
              name: "green",
              hexcode: "#A3D2A1"
            },
            {
              name: "yellow",
              hexcode: "#F9F8E6"
            },
            {
              name: "red",
              hexcode: "#ED99A8"
            }
          ],
          sizes: [
            {
              name: "small",
              code: "s"
            },
            {
              name: "medium",
              code: "m"
            },
            {
              name: "large",
              code: "l"
            },
            {
              name: "extra large",
              code: "xl"
            }
          ]
        },
        quantity: 1,
        originalPrice: 23,
        price: 23,
        currency: "$"
      },
      {
        id: "3",
        name: "cotton shirt",
        variation: "solid grey",
        url:
          "https://s7d2.scene7.com/is/image/marmot/42110_1415_front_aerobora_ls?$dw-product$=",
        style: "ms13kt1906",
        selectedColor: { name: "grey", hexcode: "#1169BD" },
        selectedSize: { name: "small", code: "s" },
        availableOptions: {
          colors: [
            {
              name: "green",
              hexcode: "#A3D2A1"
            },
            {
              name: "yellow",
              hexcode: "#F9F8E6"
            },
            {
              name: "red",
              hexcode: "#ED99A8"
            }
          ],
          sizes: [
            {
              name: "small",
              code: "s"
            },
            {
              name: "medium",
              code: "m"
            },
            {
              name: "large",
              code: "l"
            },
            {
              name: "extra large",
              code: "xl"
            }
          ]
        },
        quantity: 1,
        originalPrice: 13,
        price: 13,
        currency: "$"
      }
    ];
    this.quantity = this.products.length;
    this.productSubject.next(this.products);
  }

  get prodSubject() {
    return this.productSubject;
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  updateProduct(product: Product) {
    let prod = this.products.filter(pr => pr.id == product.id)[0];
    let index = this.products.indexOf(prod);
    this.products[index] = product;
    this.productSubject.next(this.products);
  }

  updateQty(quan: number) {
    console.log(quan);
    this.quantity = quan;
  }

  get qty() {
    return this.quantity;
  }
}
