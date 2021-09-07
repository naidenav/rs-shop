export interface ICatalogState {
  isCatalogOpened: boolean;
  activeCategory: string;
}

export const initialCatalogState: ICatalogState = {
  isCatalogOpened: false,
  activeCategory: 'appliances',
};
