interface color {
  name: string;
  hexcode: string;
}

interface size {
  name: string;
  code: string;
}

export interface Product {
  id: string;
  name: string;
  url: string;
  variation: string;
  style: string;
  selectedColor: color;
  selectedSize: size;
  availableOptions: { colors: Array<color>; sizes: Array<size> };
  quantity: number;
  originalPrice: number;
  price: number;
  currency: string;
}
