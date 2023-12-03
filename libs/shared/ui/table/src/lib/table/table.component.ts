import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  Type,
  inject,
} from '@angular/core';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';

import { TableRowComponent } from './table-row/table-row.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { Header } from './header.type';
import { TableDeletingRowComponent } from './table-admin/table-deleting-row/table-deleting-row.component';
import { TableEditingRowComponent } from './table-admin/table-editing-row/table-editing-row.component';
import { TableService } from './table.service';
import { TableAdminButtonsComponent } from './table-admin/table-admin-buttons.component';

type CustomComponentOutlet = {
  component: Type<unknown>;
  inputs?: Record<string, unknown>;
};
@Component({
  imports: [
    TableRowComponent,
    TableHeaderComponent,
    TableAdminButtonsComponent,
    NgComponentOutlet,
    NgTemplateOutlet,
  ],
  selector: 'pg-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  private readonly tableService = inject(TableService);

  public readonly isEditing = this.tableService.getIsEditing();
  public readonly isDeleting = this.tableService.getIsDeleting();

  @Input() public tableItems: unknown[] = [];
  @Input() public tableHeaders: Header[] = [];
  @Input() public isAdmin = false;
  @Output() public sort = new EventEmitter<void>();

  @ContentChild('tableHeaderTemplate')
  public tableHeaderTemplate!: TemplateRef<unknown>;

  @ContentChild('tableRowTemplate')
  public tableRowTemplate!: TemplateRef<unknown>;

  public onSort(): void {
    this.sort.emit();
  }

  public getDisplayActionRow(
    item: unknown,
    headers: Header[]
  ): CustomComponentOutlet {
    const componentOutlet: CustomComponentOutlet = {
      component: this.isDeleting()
        ? TableDeletingRowComponent
        : TableEditingRowComponent,
      inputs: {
        item,
        headers,
      },
    };

    return componentOutlet;
  }
}
