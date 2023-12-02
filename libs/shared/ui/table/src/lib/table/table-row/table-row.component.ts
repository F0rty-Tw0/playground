import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

import { TableColComponent } from '../table-col/table-col.component';
import { Header } from '../header.type';

@Component({
  imports: [TableColComponent, NgTemplateOutlet],
  selector: 'pg-table-row',
  standalone: true,
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() public item!: any;
  @Input() public headers: Header[] = [];

  @ContentChild('tableColTemplate')
  public tableColTemplate!: TemplateRef<unknown>;
}
