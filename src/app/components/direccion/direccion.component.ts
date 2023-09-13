import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DireccionService } from 'src/app/services/direccion.service';


@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  idproducto: number;
  producto: any;
  cantidad:number;
  cedula:string;
  nombrecliente:string;
  celular:string;
  direccion:string;
  

  constructor(private activateRoute: ActivatedRoute, private direccionService: DireccionService, private router: Router){
    this.idproducto = 0;
    this.cantidad = 1;
    this.cedula = '';
    this.nombrecliente = '';
    this.celular = '';
    this.direccion = '';
  }

//Método que se inicializa cada vez que se recarga la app
  ngOnInit(){
    this.obtenerIdProducto();
    this.mostrarProducto(this.idproducto); 
  }

//Método que obtiene el id que se le pasa por la URL y se lo asigna a la variable: idproducto
  obtenerIdProducto(){
    this.activateRoute.paramMap.subscribe((dato)=>{
      this.idproducto = Number(dato.get('id'));
    })
  };
//Método que llama el método del servicio:DireccionService para luego asignarle el resultado a la variable: producto
  mostrarProducto(id:number){
    this.direccionService.obtenerProductoPorId(id).subscribe((data)=>{
      this.producto = data;
    },(error)=>{
      console.log('Error al intentar obtener el producto', error)
    });

  }
  //Método para agregar un pedido pasandole los datos en orden 

  agregarPedido(){
    const datos = {
      cantidad: this.cantidad,
      cedula: this.cedula,
      celular: this.celular,
      direccion: this.direccion,
      id_producto: this.producto.id,
      nombre: this.nombrecliente
    }
    this.direccionService.guardarPedido(datos).subscribe((datos)=>{
      console.log("Pedido guardado correctamente",datos)
      this.router.navigate(["/confirmacion"])
    }, (error)=>{
      alert("Error al hacer el pedido, por favor verifique su información")
      console.log(error);
    });

  }

}
