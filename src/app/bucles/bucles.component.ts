import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas: Persona[] = [
    {nombre: "Rei",    edad: 20},
    {nombre: "Kauoru", edad: 22},
    {nombre: "Misato", edad: 30},
    {nombre: "Gendo",  edad: 40},
  ];
}
