import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav-button',
  templateUrl: './header-nav-button.component.html',
  styleUrls: ['./header-nav-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavButtonComponent implements OnInit {
  @Input() public icon: string = '';
  @Input() public title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
