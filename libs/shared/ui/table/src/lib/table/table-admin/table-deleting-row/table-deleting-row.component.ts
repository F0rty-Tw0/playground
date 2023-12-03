import { Component, Input } from '@angular/core';
import { Header } from '../../header.type';

@Component({
  selector: 'pg-table-deleting-row',
  standalone: true,
  templateUrl: 'table-deleting-row.component.html',
  styleUrl: 'table-deleting-row.component.scss',
})
export class TableDeletingRowComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() public item!: any;
  @Input() public headers: Header[] = [];

  public onDelete(item: unknown): void {
    console.log('item', item);
  }
}
