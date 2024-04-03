import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  mostrarAlerta: boolean = false;

  mostrarConsola(nombre: string) {
    console.log(nombre);
    this.mostrarAlerta = true;
  }

}
