import { Component } from '@angular/core';
import { AfazeresService } from './services/afazeres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public afazeresService: AfazeresService){}

// ao colocar private no parametro do construtor eu estou fazendo o mesmo que
//  afazeresService: AfazeresService
//  construtor(afazeresService: AfazeresService){
//    this.afazeresService = afazeresService;
//  }

}
