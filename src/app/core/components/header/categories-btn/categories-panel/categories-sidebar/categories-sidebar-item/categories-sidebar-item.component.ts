import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ICategory } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-categories-sidebar-item',
  templateUrl: './categories-sidebar-item.component.html',
  styleUrls: ['./categories-sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSidebarItemComponent implements OnInit {
  @Input() public category!: ICategory;

  public svgPath!: string;

  constructor() {}

  ngOnInit(): void {
    this.svgPath = `../../../../../../assets/icons/categories-sprite.svg#${this.category.id}-icon`;
  }
}
