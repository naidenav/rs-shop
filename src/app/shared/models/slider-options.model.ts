export interface ISliderOptions {
  imagesUrls: string[];
  activeSlide: number;
  toUp: number | null;
  toDown: number | null;
  fromUp: number | null;
  fromDown: number | null;
  nextSlide: number | null;
  prevSlide: number | null;
}
