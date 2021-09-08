import { IGoodsItem } from 'src/app/shared/models/goods.model';

export interface ICatalogState {
  subCategoryName: string;
  goods: IGoodsItem[];
  loading: boolean;
  error: string;
}

export const initialCatalogState: ICatalogState = {
  subCategoryName: '',
  goods: [],
  loading: false,
  error: '',
};
