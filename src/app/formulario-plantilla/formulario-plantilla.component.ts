import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-plantilla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-plantilla.component.html',
  styleUrl: './formulario-plantilla.component.css'
})
export class FormularioPlantillaComponent {

  persona = {
    nombre:  '',
    edad:0
  };

  procesar(){
    console.log(this.persona)
  }

}
