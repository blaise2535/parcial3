import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  FormularioDeEmpleados:FormGroup;
  ID:any
  constructor(
    private formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private ruteador:Router,
    private crudService:CrudService) {

    this.ID=this.activeRoute.snapshot.paramMap.get('id');

    console.log(this.ID);

     this.crudService.ObtenerEmpleado(this.ID).subscribe(

      respuesta=>{console.log(respuesta);
      this.FormularioDeEmpleados.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo']
      })
      });
      this.FormularioDeEmpleados=this.formulario.group({
        nombre:[''],
        correo:[''] 
      });
   }

  ngOnInit(): void {

  }
  enviarDatos():any {
    console.log(this.ID);
    console.log(this.FormularioDeEmpleados.value);
this.crudService.EditarEmpleado(this.ID,this.FormularioDeEmpleados.value).subscribe(()=>{

  this.ruteador.navigateByUrl('/listar-empleado')
});
  }

}
