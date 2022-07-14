import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // usando para informar que o service esta disponivel para todos os componentes do modulo
})
export class AfazeresService {
  lista: string[] = ["asdasdasd", "apsdmqpwdm"];

  adicionarItem(){
    this.lista.push("Novo Item")
  }

}
