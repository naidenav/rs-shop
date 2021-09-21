import { ICatalogState, initialCatalogState } from './catalog.state';
import { ICategoriesState, initialCategoriesState } from './categories.state';
import { initialOrderState, IOrderState } from './order.state';
import { initialUserProfileState, IUserProfileState } from './user-profile.state';

export interface AppState {
  categoriesState: ICategoriesState;
  userProfileState: IUserProfileState;
  catalogState: ICatalogState;
  orderState: IOrderState;
}

export const initialState: AppState = {
  categoriesState: initialCategoriesState,
  userProfileState: initialUserProfileState,
  catalogState: initialCatalogState,
  orderState: initialOrderState,
};
