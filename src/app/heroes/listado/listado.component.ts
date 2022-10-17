import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];

  heroeCaido: string= '';

  borrarHeroe():void {
    this.heroeCaido = this.heroes.shift() || '';
  }
}
