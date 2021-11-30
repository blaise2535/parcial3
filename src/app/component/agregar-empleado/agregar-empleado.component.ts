import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
FormularioDeEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private  ruteador:Router,
    private crudService:CrudService  ) {
    this.FormularioDeEmpleados= this.formulario.group({ 
          nombre:[''],
          correo:['']

    });
  }

  ngOnInit(): void {
  }
enviardatos():any{
console.log("presionado");
console.log(this.FormularioDeEmpleados.value);
this.crudService.AgregarEmpleado(this.FormularioDeEmpleados.value).subscribe();
this.ruteador.navigateByUrl('/listar-empleado');
}
}
