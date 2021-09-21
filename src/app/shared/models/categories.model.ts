export interface ISubCategory {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
  subCategories: ISubCategory[];
}
