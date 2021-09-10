import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvailableAmountHighlighting]',
})
export class AvailableAmountHighlightingDirective implements OnChanges {
  @Input('appAvailableAmountHighlighting') public amount: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnChanges() {
    this.highlight();
  }

  private highlight() {
    let color: string;

    if (this.amount > 19) {
      color = '#66be54';
    } else if (this.amount > 4) {
      color = '#fcc44d';
    } else if (this.amount > 0) {
      color = '#e45555';
    } else {
      color = '#afafaf';
    }

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
  }
}
