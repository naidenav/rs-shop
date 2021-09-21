import { IOrder } from 'src/app/shared/models/user-profile.model';

export interface IOrderState extends IOrder {}

export const initialOrderState: IOrderState = {
  items: [],
  details: {
    name: '',
    address: '',
    phone: '',
    timeToDeliver: '',
    comment: '',
  },
};
