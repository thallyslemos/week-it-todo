export class Tarefa {
  id: string;
  descricao: string;
  titulo: string;
  dataAlteracao: Date;
  finalizado: boolean;
  dataConclusao: Date;
  dataConclusaoPrevista: Date;

  constructor({ titulo, descricao }: { titulo: string; descricao: string }) {
    this.titulo = titulo;
    this.descricao = descricao;
  }
}
