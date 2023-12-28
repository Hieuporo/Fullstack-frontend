export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Paging {
  hasNextPage: boolean;
  items: Array<Product>;
  totalPages: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
  brandId: number;
  productItems: Array<ProductItem>;
}

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  productId: number;
  quantityInStock: number;
}

export interface Cart {
  id: number;
  userid: string;
  cartItems: Array<CartItem>;
}

export interface CartItem {
  id: number;
  cartId: number;
  productItemId: number;
  productItem: ProductItem;
  quantity: number;
}
export interface ShippingMethod {
  id: number;
  price: number;
  name: string;
}

export interface CartState {
  cart: Cart | null;
  total: number;
}

export interface Coupon {
  id: number;
  couponCode: string;
  minAmount: number;
  discountAmount: number;
}
