import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { Header } from '../../header.type';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'pg-header-col',
  standalone: true,
  templateUrl: './header-col.component.html',
  styleUrls: ['./header-col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderColComponent {
  public sortDirection: 'asc' | 'desc' = 'asc';

  @Input({ required: true }) public header!: Header;

  @Input() public type: 'arrow' | 'icon' = 'arrow';

  @Output() public sort = new EventEmitter<void>();

  public onSort(): void {
    this.sort.emit();
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
}
