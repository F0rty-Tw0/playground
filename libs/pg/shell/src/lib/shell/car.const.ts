import { Car } from './car.type';

export const cars: Car[] = [
  {
    brand: 'Volvo',
    price: 20_000,
    color: 'Red',
    model: 'XC90',
    year: 2021,
    id: '1',
    soldState: true,
  },
  {
    brand: 'Saab',
    price: 30_000,
    color: 'Blue',
    model: 'XR22',
    year: 2022,
    id: '2',
    soldState: false,
  },
  {
    brand: 'Opel',
    price: 40_000,
    color: 'Green',
    model: 'Astra',
    year: 2012,
    id: '3',
    soldState: false,
  },
  {
    brand: 'Audi',
    price: 50_000,
    color: 'Yellow',
    model: 'Accent',
    year: 2012,
    id: '4',
    soldState: false,
  },
  {
    brand: 'Ford',
    price: 60_000,
    color: 'Purple',
    year: 2010,
    id: '5',
    soldState: false,
  },
  { brand: 'Fiat', price: 70_000, color: 'Black', id: '6', soldState: false },
  { brand: 'Renault', price: 80_000, color: 'White', id: '7', soldState: true },
  {
    brand: 'Porsche',
    price: 90_000,
    color: 'Orange',
    year: 2012,
    id: '8',
    soldState: true,
  },
];
