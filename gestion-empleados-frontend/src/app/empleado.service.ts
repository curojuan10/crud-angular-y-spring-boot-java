import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //este es el URL que va obtoner el listado de empleados del backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httClient : HttpClient){}

  // este metodo nos sirve para obtener todos los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httClient.get<Empleado[]>(`${this.baseURL}`);
  }
}
