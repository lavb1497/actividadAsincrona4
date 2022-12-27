import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  nombre:string = "Nombre";

  agregarNombre(){
    this.nombre = "Luis Villafana"
  }
}
