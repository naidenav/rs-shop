import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from 'src/app/constants';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public toBasket() {
    this.router.navigate([ROUTES.basket]);
  }
}
