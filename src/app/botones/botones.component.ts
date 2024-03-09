import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

text_color: string='';
button_disabled: boolean=true;
imagen:string='https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-moda-gente-mujer-relajacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

}
