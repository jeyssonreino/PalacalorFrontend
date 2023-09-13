import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  //Variables a utilizar y su tipo de datos 

  ciudad:string;
  codigopais:string;
  apikey:string;

//Método constructor que inicializa las variables 
  constructor(private http: HttpClient) { 
    this.ciudad = 'sahagun';
    this.codigopais = 'co';
    this.apikey = '0ce95036f0a0242e48d0fd9950e9cf92' //Clave de la API KEY openweathermap.org para resultado del clima globales

  }

  //Métodos para consumir la API externa de: openweathermap.org

  obtenerTemperatura(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.codigopais}&appid=${this.apikey}&units=metric&q=`;
    return this.http.get(url);
  }



}
