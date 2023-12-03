import { Component, inject } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'pg-table-admin-buttons',
  standalone: true,
  templateUrl: 'table-admin-buttons.component.html',
  styleUrl: 'table-admin-buttons.component.scss',
})
export class TableAdminButtonsComponent {
  private readonly tableService = inject(TableService);

  public readonly isEditing = this.tableService.getIsEditing();
  public readonly isDeleting = this.tableService.getIsDeleting();

  public toggleEditing(): void {
    this.tableService.toggleEditing();
  }

  public toggleDeleting(): void {
    this.tableService.toggleDeleting();
  }
}
