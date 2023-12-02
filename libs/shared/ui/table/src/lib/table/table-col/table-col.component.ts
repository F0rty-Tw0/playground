import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'pg-table-col',
  standalone: true,
  templateUrl: './table-col.component.html',
  styleUrls: ['./table-col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColComponent {
  @Input() public item!: unknown;
}
