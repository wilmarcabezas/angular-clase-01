import { Component,OnInit,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-formulario-plantilla',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './formulario-plantilla.component.html',
  styleUrl: './formulario-plantilla.component.css'
})

export class FormularioPlantillaComponent implements OnInit {

  persona={
    nombre:'',
    edad:null
  };

  procesarForm(){
    console.log(this.persona);
  }

  constructor(){

  }

  ngOnInit(): void {
      
  }

 
}
