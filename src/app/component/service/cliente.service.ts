import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteServicio {
  /* DEFINIMOS LAS VARIABLES NECESARIAS PARA PEDIR INFO DE LA BASE DE DATOS */
  clientesColeccion: AngularFirestoreCollection<Cliente>;
  clienteDoc: AngularFirestoreDocument<Cliente>;
  clientes: Observable<Cliente[]>; //DEFINE UN ARREGLO DE TIPO CLIENTE
  cliente: Observable<Cliente>; //DEFINE SOLO UN OBJETO DE TIPO CLIENTE

  constructor(private db: AngularFirestore) { //nos conectamos a cliente.coleccion e inyectamos IMPORANTE PONER NOMBRE CORRECTO
    this.clientesColeccion = db.collection('ClientCloudFirestore', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }
/* SOLICITAMOS QUE NOS DEVUELVA DEL CLIENTE  EL ID Y PAYLOAD(EL CUERPO)*/
  getClientes(): Observable<Cliente[]> {
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as Cliente;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientesColeccion.add(cliente);
  }

  getCliente(id: string) {
    this.clienteDoc = this.db.doc<Cliente>(`clientes/${id}`);
    this.cliente = this.clienteDoc.snapshotChanges().pipe(
      map((accion) => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as Cliente;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );
    return this.cliente;
  }

  modificarCliente(cliente: Cliente) {
    this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
    this.clienteDoc.update(cliente);
  }

  eliminarCliente(cliente: Cliente) {
    this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
    this.clienteDoc.delete();
  }
}
