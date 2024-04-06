import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";
import { BotonesComponent } from "./botones/botones.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, RouterOutlet, ContadorComponent, BotonesComponent, FormularioComponent, BuclesComponent, SwitchComponent, FormularioPlantillaComponent, FormularioReactivoComponent, ChildrenComponent, AddMessagesComponent, ListMessagesComponent]
})
export class AppComponent {
  title = 'curso angular';
}
