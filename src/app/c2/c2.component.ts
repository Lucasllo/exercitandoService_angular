import { Component, OnInit } from '@angular/core';
import { Afazeres2Service } from '../services/afazeres2.service';
import { AfazeresService } from '../services/afazeres.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers:[Afazeres2Service] // service disponivel apenas nesse componente, se outro componente tbm criar um providers desse tipo, será outra instancia, e não afetara o desse componente
})
export class C2Component{


  constructor(public afazeres: Afazeres2Service, public afazeresService: AfazeresService) { }

}
