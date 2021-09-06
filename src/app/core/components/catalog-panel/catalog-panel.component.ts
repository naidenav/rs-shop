import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-panel',
  templateUrl: './catalog-panel.component.html',
  styleUrls: ['./catalog-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
