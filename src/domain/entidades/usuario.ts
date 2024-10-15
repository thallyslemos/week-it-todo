import { randomUUID } from 'crypto';

export class Usuario {
  id: string;
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
    this.id = randomUUID();
  }

  public getNome = () => this.nome;
  public getId = () => this.id;
}
