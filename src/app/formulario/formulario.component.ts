import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
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

    this.openAlert=true;
  }

  openAlert: boolean = false;
}
