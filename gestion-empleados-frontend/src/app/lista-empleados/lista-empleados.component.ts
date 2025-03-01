import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor() { }

  ngOnInit(): void {
    this.empleados = [{
      "id": 1,
      "nombre": "Juan",
      "apellido": "Curo",
      "email": "juan10@gamil.com"
    }, {
      "id": 2,
      "nombre": "Julio",
      "apellido": "Ramirez",
      "email": "julio11@gamil.com"
    }];
  }

}
