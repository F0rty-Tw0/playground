import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { TableRowComponent } from './table-row/table-row.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { Header } from './header.type';

@Component({
  imports: [TableRowComponent, TableHeaderComponent, NgTemplateOutlet],
  selector: 'pg-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public tableItems: unknown[] = [];
  @Input() public tableHeaders: Header[] = [];
  @Output() public sort = new EventEmitter<void>();

  @ContentChild('tableHeaderTemplate')
  public tableHeaderTemplate!: TemplateRef<unknown>;

  @ContentChild('tableRowTemplate')
  public tableRowTemplate!: TemplateRef<unknown>;

  public onSort(): void {
    this.sort.emit();
  }
}
