import { IGoodsItem } from './goods.model';

export interface IUserProfile {
  firstName: string;
  lastName: string;
  token: string;
  login: string;
  password: string;
  cart: IGoodsItem[];
  favorites: IGoodsItem[];
  orders: IGoodsItem[];
}
