import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
      
  }

  nombre: string= 'Nico y Santi';

  persona: Persona = {
    nombre: 'Santi',
    edad:22
  }
  numero: number = 0;

  decrementar(){
    this.numero--;
  }
  incrementar(){
    this.numero++;
  }
}
