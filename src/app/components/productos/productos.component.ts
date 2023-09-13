import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any;
  

  constructor(private productoService: ProductoService, private router: Router){
    this.productos = [];
  }
  

  ngOnInit(): void {
    this.mostrarProdcutos();
  }

  mostrarProdcutos(){
    this.productoService.obtenerProductos().subscribe((data)=>{
      this.productos = data;
    },
    (error) =>{
      console.log("Error al obtner los datos:", error);
    }
    )
  }

  redirigirADireccion(id: number){
    this.router.navigate(['direccion/',id])
  }


}
