import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit{

  temperatura:any;

  constructor(private temperaturaService: TemperaturaService){


  }
//Método para realizar opraciones cada vez que se acceda al componente automaticamente
  ngOnInit(){
    this.mostrarTemperatura();
    
  }
//Método para mostrar la tempratura manejando los datos que recibimos del servicio:TemperaturaService
  mostrarTemperatura(){
    this.temperaturaService.obtenerTemperatura().subscribe((data)=>{
      this.temperatura = data;
    },(error)=>{
      console.log('Error al obtener los datos de la API de temperatura', error)
    })
  };


  //Método para mostrar mensaje al usuario dependiendo el nivel de la temperatura

  mostrarSensacionTermica(){
    if(this.temperatura.main.temp >= 35.00 ){
      return '¡Nojod* nos iremos a cocinar!';
    }else if(this.temperatura.main.temp >= 34.00 && this.temperatura.main.temp < 35.00){
      return '¡Hay Dios mio, nos estamos prendiendo!';
    }else if(this.temperatura.main.temp >= 33.00 && this.temperatura.main.temp < 34.00){
      return '¡Cule calor tan triple hijueput*!';
    }else if(this.temperatura.main.temp >= 32.00 && this.temperatura.main.temp < 33.00){
      return '¡Sin palabras, joda que calor, que calor!';
    }else if(this.temperatura.main.temp >= 31.00 && this.temperatura.main.temp < 32.00){
      return '¡Joda bajale a esa mond*';
    }else if(this.temperatura.main.temp >= 30.00 && this.temperatura.main.temp < 31.00){
      return '¡Cule calor mi hermano!';
    }else if(this.temperatura.main.temp >= 29.00 && this.temperatura.main.temp < 30.00){
      return 'Con este calor aguantan unas frias';
    }else if(this.temperatura.main.temp >= 28.00 && this.temperatura.main.temp < 29.00){
      return 'Breve, aguantan unas frias pa la sed';
    }else if(this.temperatura.main.temp >= 27.00 && this.temperatura.main.temp < 28.00){
      return 'Bacano unas frias y empiernado';
    }else if(this.temperatura.main.temp >= 26.00 && this.temperatura.main.temp < 27.00){
      return '¡Cule frio bacano!';
    }else if(this.temperatura.main.temp >= 25.00 && this.temperatura.main.temp < 26.00){
      return 'Pal que iba a lavar, imaginate';
    }else{
      return 'Pa que, hace frio, no te vamos a sonsacar'
    }
  }

}
