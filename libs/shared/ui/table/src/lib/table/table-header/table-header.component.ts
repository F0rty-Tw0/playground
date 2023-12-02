import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

import { HeaderColComponent } from './header-col/header-col.component';
import { Header } from '../header.type';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [HeaderColComponent, NgTemplateOutlet],
  selector: 'pg-table-header',
  standalone: true,
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeaderComponent {
  @Input() public tableHeaders: Header[] = [];

  @Output() public sort = new EventEmitter<void>();

  @ContentChild('headerColTemplate')
  public headerColTemplate!: TemplateRef<unknown>;

  public onSort(): void {
    this.sort.emit();
  }
}
