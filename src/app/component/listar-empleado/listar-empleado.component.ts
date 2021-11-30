import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
Empleados:any;
  constructor(private CrudService:CrudService) {
    
   }

  ngOnInit(): void {
    this.CrudService.ObtenerEmpleados().subscribe(respuesta=> {
      console.log(respuesta);
      this.Empleados=respuesta
    });
  }
borrarRegistro(id:any,Icontrol:any){
  console.log(id);
  console.log(Icontrol);
  if(window.confirm('Desea borrar el registro')){
this.CrudService.BorrarEmpleado(id).subscribe((respuesta)=>{
  this.Empleados.splice(Icontrol,1);

});
  }
}
}
