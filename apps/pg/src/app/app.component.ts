import { Component } from '@angular/core';
import { ShellComponent } from '@pg/shell';

@Component({
  imports: [ShellComponent],
  selector: 'pg-root',
  standalone: true,
  template: '<pg-shell></pg-shell>',
})
export class AppComponent {
  title = 'pg';
}
