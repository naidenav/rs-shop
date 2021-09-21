import { IGoodsItem } from 'src/app/shared/models/goods.model';

export interface ICatalogState {
  subCategoryName: string;
  goods: IGoodsItem[];
  areThereMoreGoods: boolean;
  paginationCoefficient: number;
  goodsItem: IGoodsItem;
  loading: boolean;
  error: string;
  sortingDirection: string;
  sortingCriterion: string;
}

export const initialCatalogState: ICatalogState = {
  subCategoryName: '',
  goods: [],
  areThereMoreGoods: true,
  paginationCoefficient: 0,
  goodsItem: {} as IGoodsItem,
  loading: false,
  error: '',
  sortingDirection: '',
  sortingCriterion: '',
};
