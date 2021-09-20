import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { categoriesSelector } from 'src/app/redux/selectors/categories.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { environment } from 'src/environments/environment';
import SwiperCore, { EffectFade, Navigation, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, EffectFade]);
@Component({
  selector: 'app-popular-goods-slider',
  templateUrl: './popular-goods-slider.component.html',
  styleUrls: ['./popular-goods-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularGoodsSliderComponent implements OnInit {
  public goodsItems$!: Observable<IGoodsItem[][]>;

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    initialSlide: 0,
    breakpointsBase: 'container',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  };

  constructor(private http: HttpService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.goodsItems$ = this.store.select(categoriesSelector).pipe(
      switchMap((categories) =>
        forkJoin(categories.map((category) => this.http.getGoods(category.id)))
      ),
      map((goodsArrays) =>
        goodsArrays.reduce((acc, goodsArray) => acc.concat(goodsArray), [])
      ),
      map((goods) => goods.filter((goodsItem) => goodsItem.rating === 5)),
      map((goods) => this.splitArray(goods, 6))
    );

    forkJoin(
      environment.PROMOTIONAL_GOODS.map((id) => this.http.getGoodsItem(id))
    );
  }

  onSwiper(swiper: SwiperComponent) {
    console.log(this.swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }

  public splitArray(array: any[], partsLlength: number): any[][] {
    if (array.length > partsLlength) {
      const initialArray = [...array];
      let resultArray: any = [];
      resultArray.push(initialArray.splice(0, partsLlength));
      return resultArray.concat(
        this.splitArray(array.slice(partsLlength), partsLlength)
      );
    } else return [array];
  }
}
