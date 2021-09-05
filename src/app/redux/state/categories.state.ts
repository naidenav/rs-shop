import { ICategory } from 'src/app/shared/models/categories.model';

export interface ICategoriesState {
  categories: ICategory[];
  loading: boolean;
}

export const initialCategoriesState: ICategoriesState = {
  categories: [],
  loading: false,
};
