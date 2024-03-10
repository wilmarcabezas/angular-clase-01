import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormularioReactivoComponent} from './formulario-reactivo/formulario-reactivo.component'
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, FooterComponent, 
    BuclesComponent, SwitchComponent,ContadorComponent, BotonesComponent, 
    ChildrenComponent,
    FormularioComponent, FormularioPlantillaComponent,FormularioReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Soy el Componente app';
}
