import { Component, OnInit } from '@angular/core';
import { AfazeresService } from '../services/afazeres.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component {

  constructor(public afazeresService: AfazeresService) { }

}
