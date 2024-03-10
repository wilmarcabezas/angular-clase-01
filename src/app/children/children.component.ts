import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {

  @Input() title?: string;
  @Output() titleChange:EventEmitter<string> = new EventEmitter();

  titlecambiado(){
    console.log(this.title);
    this.titleChange.emit(this.title);
  }
}
