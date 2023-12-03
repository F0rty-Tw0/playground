import { Injectable, Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TableService {
  private readonly isEditing = signal<boolean>(false);
  private readonly isDeleting = signal<boolean>(false);

  public getIsDeleting(): Signal<boolean> {
    return this.isDeleting;
  }

  public toggleDeleting(): void {
    const isDeleting = this.isDeleting();

    this.isDeleting.set(!isDeleting);
  }

  public getIsEditing(): Signal<boolean> {
    return this.isEditing;
  }

  public toggleEditing(): void {
    const isEditing = this.isEditing();

    this.isEditing.set(!isEditing);
  }
}
