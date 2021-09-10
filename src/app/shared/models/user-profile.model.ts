export interface IOrderItem {
  id: string;
  amount: number;
}

export interface IOrderDetailes {
  name: string;
  address: string;
  phone: string;
  timeToDeliver: string;
  comment: string;
}

export interface IOrder {
  items: IOrderItem[];
  details: IOrderDetailes;
  is: string;
}
export interface IUserProfile {
  firstName: string;
  lastName: string;
  token: string;
  login: string;
  password: string;
  cart: string[];
  favorites: string[];
  orders: IOrder[];
}
