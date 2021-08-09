import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuario => {
      console.log(usuario);
    });

    /*
    //creamos la promesa
    const promesa = new Promise( ( resolve, reject ) => {
      if ( false ){
        resolve('Hola mundo');
      } else {
        reject('Operación Error');
      }
    });

    //ejecutamos cuando la promesa se resuelve
    promesa.then( ( mensaje ) => {
      console.log(mensaje);
    })
    .catch( error => console.log('Error en mi promesa', error));

    console.log('Fin del init!!');
    */

  }

  getUsuarios() {

    const promesa = new Promise( resolve => {

      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) );
      
    } );

    return promesa;
  }

}
