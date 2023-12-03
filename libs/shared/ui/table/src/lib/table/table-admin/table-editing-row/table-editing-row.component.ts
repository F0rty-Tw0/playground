import { Component, Input } from '@angular/core';
import { Header } from '../../header.type';

@Component({
  selector: 'pg-table-editing-row',
  standalone: true,
  templateUrl: 'table-editing-row.component.html',
  styleUrl: 'table-editing-row.component.scss',
})
export class TableEditingRowComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() public item!: any;
  @Input() public headers: Header[] = [];

  public onSave(item: unknown): void {
    console.log('item', item);
  }
}
