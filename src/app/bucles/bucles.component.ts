import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent implements OnInit {

  personas:Persona[] = [
    {nombre: 'Juan', edad: 25},
    {nombre: 'Ana', edad: 30},
    {nombre: 'Pedro', edad: 35},
    {nombre: 'Luis', edad: 40},
    {nombre: 'Maria', edad: 45},
  ];


  constructor(){

  }

  ngOnInit(): void {
      
  }

}
