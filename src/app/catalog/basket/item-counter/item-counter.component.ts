import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCounterComponent implements OnInit {
  @Input() goodsItemId!: string;

  @Output() amount = new EventEmitter<number>();

  public isEnable: boolean = true;

  public counter: number = 1;

  constructor() {}

  public ngOnInit(): void {}

  public increase(): void {
    this.counter++;
    this.amount.emit(this.counter);
  }

  public decrease(): void {
    this.counter--;
    this.amount.emit(this.counter);
  }
}
