import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
 
  public data1 = [
    [10, 15, 40],
  ];

  public labels2: string[] = ['TV', 'Licuadora', 'Cocina'];
 
  public data2 = [
    [100, 5, 30],
  ];

  public labels3: string[] = ['Blusas', 'Zapatos', 'Cartera'];
 
  public data3 = [
    [10, 55, 80],
  ];
}
