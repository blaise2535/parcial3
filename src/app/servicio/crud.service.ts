import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleado } from './empleado';
import {AgregarEmpleadoComponent } from '../component/agregar-empleado/agregar-empleado.component';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
API:string= 'http://localhost/empleados/' //api de php

  constructor(private clientehttp:HttpClient){}
  AgregarEmpleado(datosEmpleado:empleado):Observable<any>{
    return this.clientehttp.post(this.API+'?insertar=1',datosEmpleado);
  }
  ObtenerEmpleados(){
    return this.clientehttp.get(this.API);
  }
  BorrarEmpleado(id:any):Observable<any>{
    return this.clientehttp.get(this.API+'?borrar='+id);

}
ObtenerEmpleado(id:any):Observable<any>{
  return this.clientehttp.get(this.API+'?consultar='+id);

}
EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
  return this.clientehttp.post(this.API+'?actualizar='+id,datosEmpleado);
}
}
