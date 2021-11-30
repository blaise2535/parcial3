import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AgregarEmpleadoComponent} from './component/agregar-empleado/agregar-empleado.component';
import{ListarEmpleadoComponent} from './component/listar-empleado/listar-empleado.component';
import{EditarEmpleadoComponent} from './component/editar-empleado/editar-empleado.component';


const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'agregar-empleado'},
{path:'agregar-empleado',component:AgregarEmpleadoComponent},
{path:'listar-empleado',component:ListarEmpleadoComponent},
{path:'editar-empleado/:id',component:EditarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
