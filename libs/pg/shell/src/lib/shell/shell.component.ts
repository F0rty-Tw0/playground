import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  Header,
  HeaderColComponent,
  TableColComponent,
  TableComponent,
  TableHeaderComponent,
  TableRowComponent,
} from '@pg/table';

import { cars } from './car.const';
import { airplanes } from './airplane.const';
import { Car } from './car.type';

@Component({
  imports: [
    RouterModule,
    TableComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableColComponent,
    HeaderColComponent,
  ],
  selector: 'pg-shell',
  standalone: true,
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public cars = cars;
  public airplanes = airplanes;

  public carHeaders: Header[] = [
    { key: 'brand', label: 'Brand' },
    { key: 'model', label: 'Model' },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'color', label: 'Color' },
    { key: 'year', label: 'Year', sortable: true },
  ];

  public airplaneHeaders: Header[] = [
    {
      key: 'model',
      label: 'Model',
    },
    {
      key: 'speed',
      label: 'Speed',
      sortable: true,
    },
    {
      key: 'color',
      label: 'Color',
    },
  ];

  public onSortAirplanes(): void {
    // FAKE SORT LOGIC
    this.airplanes = this.airplanes.reverse();
  }

  public onSortCars(): void {
    // FAKE SORT LOGIC
    this.cars = this.cars.reverse();
  }

  public onBuy(car: Car): void {
    car.soldState = true;
  }
}
