import { ICategory } from 'src/app/shared/models/categories.model';

export interface ICategoriesState {
  categories: ICategory[];
  loading: boolean;
  isCatalogOpened: boolean;
  activeCategory: string;
}

export const initialCategoriesState: ICategoriesState = {
  categories: [],
  loading: false,
  isCatalogOpened: false,
  activeCategory: 'appliances',
};
