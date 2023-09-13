import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductoService } from './services/producto.service';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { HeaderComponent } from './components/header/header.component';
import { TemperaturaService } from './services/temperatura.service';
import { FooterComponent } from './components/footer/footer.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    TemperaturaComponent,
    HeaderComponent,
    FooterComponent,
    DireccionComponent,
    HomeComponent,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductoService,
    TemperaturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
