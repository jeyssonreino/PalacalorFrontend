import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { 

  }
//Método GET para obtener un producto mediantes su ID
  obtenerProductoPorId(id:number){
    const url = `http://192.168.1.38:8080/producto/obtenerproducto/${id}`
    return this.http.get(url);
  }

  guardarPedido(datos:any){
    const url = `http://192.168.1.38:8080/pedido/guardarpedido`;
    return this.http.post(url, datos);
  }


}
