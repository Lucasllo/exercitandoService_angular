export class Afazeres2Service {

  lista: string[] = [];
  contador: number = this.lista.length;

  add(novoItem: string){
    this.lista.push(novoItem);
    this.contador++;
  }

}
