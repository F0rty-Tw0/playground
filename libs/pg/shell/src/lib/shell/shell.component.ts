import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from '@pg/table';

@Component({
  imports: [RouterModule, TableComponent],
  selector: 'pg-shell',
  standalone: true,
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
