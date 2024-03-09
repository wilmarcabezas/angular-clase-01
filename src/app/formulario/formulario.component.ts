import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
      
  }
  mostrar_consola(name: string) {
    console.log('Hola ',name);
  }
}
