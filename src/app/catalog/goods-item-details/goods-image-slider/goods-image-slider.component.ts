import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { DEFAULT_SLIDER_OPTIONS } from 'src/app/constants';
import { ISliderOptions } from 'src/app/shared/models/slider-options.model';

@Component({
  selector: 'app-goods-image-slider',
  templateUrl: './goods-image-slider.component.html',
  styleUrls: ['./goods-image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsImageSliderComponent implements OnInit {
  @Input() public isBestSeller!: boolean;
  @Input() set imagesUrls(imagesUrls: string[]) {
    this.options = {
      ...DEFAULT_SLIDER_OPTIONS,
      imagesUrls: imagesUrls.length
        ? imagesUrls
        : ['../../../../assets/logo.png'],
    };
  }

  public options!: ISliderOptions;
  public isEnable: boolean = true;

  public activeSlide$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  ngOnInit(): void {
    this.options.imagesUrls = this.imagesUrls;
  }

  public slide(nextSlide: number) {
    this.isEnable = false;
    const currentSlide = this.activeSlide$.value;
    if (nextSlide > currentSlide) {
      this.options.nextSlide = nextSlide;
      this.options.toUp = currentSlide;
      this.options.fromDown = nextSlide;
    }
    if (nextSlide < currentSlide) {
      this.options.prevSlide = nextSlide;
      this.options.toDown = currentSlide;
      this.options.fromUp = nextSlide;
    }
    this.activeSlide$.next(nextSlide);
  }

  public checkClass(event: Event, index: number) {
    const animation = (event as AnimationEvent).animationName;
    switch (animation) {
      case 'toDown':
        this.options.toDown = null;
        break;
      case 'toUp':
        this.options.toUp = null;
        break;
      case 'fromDown':
        this.options.fromDown = null;
        break;
      case 'fromUp':
        this.options.fromUp = null;
        break;
    }
    this.options.nextSlide = null;
    this.options.prevSlide = null;

    if (this.activeSlide$.value === index) this.options.activeSlide = index;
    this.isEnable = true;
  }
}
