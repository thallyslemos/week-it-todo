import { randomUUID } from 'crypto';
import { Tarefa } from './tarefa';
import { Usuario } from './usuario';

type Status = 'Em andamento' | 'Finalizado' | 'Vazio' | 'Não iniciado';

type ProjetoProps = {
  id?: string;
  dataInicio?: Date;
  tarefas?: Tarefa[];
  nome: string;
  dataFim: Date;
  responsavel: Usuario;
};

export class Projeto {
  private id: string;
  private nome: string;
  private dataInicio: Date;
  private dataFim: Date;
  private tarefas: Tarefa[];
  private responsavel: Usuario;

  constructor(props: ProjetoProps) {
    this.dataFim = props.dataFim;
    this.nome = props.nome;
    this.responsavel = props.responsavel;
    this.id = props.id ?? randomUUID();
    this.dataInicio = props.dataInicio ?? new Date();
    this.tarefas = props.tarefas ?? [];

    this._validate(props);
  }

  public atualizarNome(nomeNovo: string) {
    this.nome = nomeNovo;
  }

  public status(): Status {
    const finalizado = this.tarefas.every((tarefa) => tarefa.finalizado);
    if (finalizado) return 'Finalizado';
    const emAndamento = this.tarefas.some((tarefa) => tarefa.finalizado);
    if (emAndamento) return 'Em andamento';
    const projetoVazio = this.tarefas.length === 0;
    if (projetoVazio) return 'Vazio';
    const naoIniciado = this.tarefas.every((tarefa) => !tarefa.finalizado);
    if (naoIniciado) return 'Não iniciado';
  }

  private _validate({ dataFim, dataInicio, nome }: ProjetoProps) {
    this._validaDatas({ dataFim, dataInicio });
    this._validaNome(nome);
  }

  private _validaNome(nome: string) {
    if (nome.length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caracteres.');
    }
  }

  private _validaDatas({
    dataInicio,
    dataFim,
  }: {
    dataInicio: Date;
    dataFim: Date;
  }) {
    if (dataFim < dataInicio) {
      throw new Error('Data início não pode ser maior do que a data fim.');
    }
  }

  public getId = () => this.id;
  public getNome = () => this.nome;
  public getDataFim = () => this.dataFim;
  public getDataInicio = () => this.dataInicio;
  public getTarefas = () => this.tarefas;
  public getResponsavel = () => this.responsavel;
}
