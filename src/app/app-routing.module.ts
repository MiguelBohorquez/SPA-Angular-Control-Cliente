import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './component/configuracion/configuracion.component';
import { EditarClienteComponent } from './component/editar-cliente/editar-cliente.component';
import { LoginComponent } from './component/login/login.component';
import { NoEncontradoComponent } from './component/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './component/registro/registro.component';
import { TableroComponent } from './component/tablero/tablero.component';

const routes: Routes = [
  { path: "", component: TableroComponent },
  { path: "login", component: LoginComponent },
  { path: "registrarse", component: RegistroComponent },
  { path: "configuracion", component: ConfiguracionComponent },
  { path: "cliente/editar:id", component: EditarClienteComponent },
  { path: "**", component: NoEncontradoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
