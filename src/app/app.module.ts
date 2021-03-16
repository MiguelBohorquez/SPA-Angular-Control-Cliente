import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './component/cliente/cliente.component';
import { CabeceroComponent } from './component/cabecero/cabecero.component';
import { EditarClienteComponent } from './component/editar-cliente/editar-cliente.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ConfiguracionComponent } from './component/configuracion/configuracion.component';
import { NoEncontradoComponent } from './component/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './component/pie-pagina/pie-pagina.component';
import { TableroComponent } from './component/tablero/tablero.component';


/* MODULOS QUE VAMOS A INSTALAR PARA LA LOGICA*/

import { environment } from '../environments/environment'; // IMPORTA LAS VARIABLES DE AMBIENTE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'; //ANTES UTILIZAMOS FirestoreSettingsToken AHORA ES SETTING
/*import { FirestoreSettingToken} from '@angular/fire/firestore'; // HEMOS SUSTITUIDO POR SETTING NO ES NECESARIO LLAMARLA */
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages'; // MODULO ENCARGADO DE ENVIAR MENSAJES FLASH
import { SETTINGS } from '@angular/fire/firestore';

/* MODULO ENCARGADO DE LA COMPATIBILIDAD */

import { FormsModule } from '@angular/forms';
import { ClienteServicio } from '../app/component/service/cliente.service';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CabeceroComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestone, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClienteServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
