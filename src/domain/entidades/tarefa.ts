import { randomUUID } from 'crypto';

export class Tarefa {
  private id: string;
  private descricao: string;
  private titulo: string;
  private dataAlteracao: Date;
  private finalizado: boolean;
  private dataConclusao: Date | null;

  constructor({ titulo, descricao }: { titulo: string; descricao: string }) {
    this.id = randomUUID();
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataAlteracao = new Date();
    this.finalizado = false;
    this.dataConclusao = null;
  }

  public getId = () => this.id;
  public getTitulo = () => this.titulo;
  public getDescricao = () => this.descricao;
  public isFinalizada = () => this.finalizado;

  public finalizar() {
    this.finalizado = true;
    this.dataAlteracao = new Date();
  }
}