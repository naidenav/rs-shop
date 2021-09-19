import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

import { forkJoin, Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { IGoodsItem } from 'src/app/shared/models/goods.model';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-promotional-goods-slider',
  templateUrl: './promotional-goods-slider.component.html',
  styleUrls: ['./promotional-goods-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionalGoodsSliderComponent implements OnInit {
  public goodsItems$!: Observable<IGoodsItem[]>;

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      clickable: true,
    },
    initialSlide: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.goodsItems$ = forkJoin(
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
}
