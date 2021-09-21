import { ISliderOptions } from './shared/models/slider-options.model';

export const PATH = {
  search: '/goods/search',
  register: '/users/register',
  login: '/users/login',
  userInfo: '/users/userInfo',
  favorites: '/users/favorites',
  basket: '/users/cart',
  order: '/users/order',
  categories: '/categories',
  category: '/goods/category',
  goodsItem: '/goods/item',
};

export const ROUTES = {
  main: '/',
  catalog: '/catalog',
  favorites: '/favorites',
  basket: '/basket',
  waitingLisy: '/waitingList',
};

export const SORTING_DIRECTION = {
  asc: 'asc',
  desc: 'desc',
};

export const SORTING_CRITERION = {
  price: 'price',
  rating: 'rating',
};

export const RESULTS_COUNT = 10;

export const DEFAULT_SLIDER_OPTIONS: ISliderOptions = {
  imagesUrls: [],
  activeSlide: 0,
  toUp: null,
  toDown: null,
  fromUp: null,
  fromDown: null,
  nextSlide: null,
  prevSlide: null,
};
