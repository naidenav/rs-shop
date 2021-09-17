import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { createOrder } from 'src/app/redux/actions/order.actions';
import { orderItemsSelector } from 'src/app/redux/selectors/order.selectors';
import { AppState } from 'src/app/redux/state/app.state';
import { IOrder, IOrderDetailes, IOrderItem } from 'src/app/shared/models/user-profile.model';

@Component({
  selector: 'app-ordering-modal-content',
  templateUrl: './ordering-modal-content.component.html',
  styleUrls: ['./ordering-modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderingModalContentComponent implements OnInit, OnDestroy {
  public deliveryTimeArray = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];
  public orderForm!: FormGroup;
  public customerName!: FormControl;
  public address!: FormControl;
  public phone!: FormControl;
  public deliveryTime!: FormControl;
  public deliveryDate!: FormControl;
  public comment!: FormControl;

  private orderItems!: IOrderItem[];
  private orderItemsSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.orderItemsSub = this.store
      .select(orderItemsSelector)
      .subscribe((items) => (this.orderItems = items));

    this.customerName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]);

    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(250),
    ]);

    this.phone = new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+\d+/),
    ]);

    this.deliveryTime = new FormControl('', Validators.required);

    this.deliveryDate = new FormControl('', [Validators.required]);

    this.comment = new FormControl('');

    this.orderForm = new FormGroup({
      customerName: this.customerName,
      address: this.address,
      phone: this.phone,
      deliveryTime: this.deliveryTime,
      deliveryDate: this.deliveryDate,
      comment: this.comment,
    });
  }

  submit() {
    const orderDetails: IOrderDetailes = {
      name: this.orderForm.get('customerName')?.value,
      address: this.orderForm.get('address')?.value,
      phone: this.orderForm.get('phone')?.value,
      timeToDeliver: `${Date.parse(
        this.orderForm.get('deliveryDate')?.value
      )}, ${this.orderForm.get('deliveryTime')?.value}`,
      comment: this.orderForm.get('comment')?.value,
    };

    const order: IOrder = {
      items: this.orderItems,
      details: orderDetails,
    };
    console.log(order);

    this.store.dispatch(createOrder({ order }));
  }

  public ngOnDestroy(): void {
    this.orderItemsSub.unsubscribe();
  }
}
