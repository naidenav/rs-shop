import { Pipe, PipeTransform } from '@angular/core';

import { SORTING_CRITERION, SORTING_DIRECTION } from 'src/app/constants';

import { IGoodsItem } from '../models/goods.model';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(
    goodsItems: IGoodsItem[],
    criterion: string = '',
    direction: string = ''
  ): IGoodsItem[] {
    if (criterion === SORTING_CRITERION.price) {
      const sortedArr = [...goodsItems].sort((a, b) => {
        return a.price - b.price;
      });
      return direction === SORTING_DIRECTION.asc
        ? sortedArr
        : sortedArr.reverse();
    }
    if (criterion === SORTING_CRITERION.rating) {
      const sortedArr = [...goodsItems].sort((a, b) => {
        return a.rating - b.rating;
      });
      return direction === SORTING_DIRECTION.asc
        ? sortedArr
        : sortedArr.reverse();
    }
    return goodsItems;
  }
}
