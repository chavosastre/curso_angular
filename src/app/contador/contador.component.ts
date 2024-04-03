import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  nombre = 'DaddyOkamiMac'
  numero: number = 1
  persona: Persona = {
    nombre: 'DaddyOkamiMac',
    edad: 46
  }

  disminuir(){
    this.numero--;
  }

  aumentar(){
    this.numero+=1;
  }
}
