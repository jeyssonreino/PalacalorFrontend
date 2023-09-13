import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { 

  }

  //Método  GET para consumir la API y traer todos los obgetos de producto  
  obtenerProductos(){
    const url = 'http://192.168.1.38:8080/producto/obtenerproductos';
    return this.http.get(url);
  }




}
