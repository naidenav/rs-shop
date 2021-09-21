export interface IGoodsItem {
  id: string;
  name: string;
  imageUrls: string[];
  availableAmount: number;
  price: number;
  rating: number;
  description: number;
  category?: string;
  subCategory?: string;
}

export interface IGoodsResponse {
  [key: string]: {
    [key: string]: IGoodsItem[];
  };
}
