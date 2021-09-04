import { ICategoriesState, initialCategoriesState } from './categories.state';
import { initialUserProfileState, IUserProfileState } from './user-profile.state';

export interface AppState {
  categoriesState: ICategoriesState;
  userProfileState: IUserProfileState;
}

export const initialState: AppState = {
  categoriesState: initialCategoriesState,
  userProfileState: initialUserProfileState,
};
