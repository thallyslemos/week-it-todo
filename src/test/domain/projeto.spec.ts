import { Projeto } from 'src/domain/entidades/projeto';
import { Usuario } from 'src/domain/entidades/usuario';

describe('Projeto', () => {
  test('Deve ser possível criar um projeto', () => {
    const usuario = new Usuario('Fulano de tal');
    const projeto = new Projeto({
      dataFim: new Date('2025-01-01'),
      nome: 'TCC',
      responsavel: usuario,
    });
    expect(projeto.getId()).toBeDefined();
    expect(projeto.getNome()).toBe('TCC');
    expect(projeto.getDataInicio()).toBeDefined();
    expect(projeto.getResponsavel().getNome()).toBe('Fulano de tal');
  });

  test('Não deve ser possível criar um projeto com data fim menor do que data início', () => {
    const usuario = new Usuario('Fulano de tal');
    expect(
      new Projeto({
        dataFim: new Date('1999-01-01'),
        nome: 'TCC',
        responsavel: usuario,
      }),
    ).toThrow();
  });

  test('Não deve ser possível criar um projeto com nome curto', () => {
    const usuario = new Usuario('Fulano de tal');
    expect(
      new Projeto({
        dataFim: new Date('1999-01-01'),
        nome: 'a',
        responsavel: usuario,
      }),
    ).toThrow();
  });

  test('Deve ser possível extrair o status do projeto', () => {
    const usuario = new Usuario('Fulano de tal');
    const projeto = new Projeto({
      dataFim: new Date('2025-01-01'),
      nome: 'TCC',
      responsavel: usuario,
    });

    expect(projeto.status()).toBe('Vazio');

    projeto.addTarefa(tarefa1);

    expect(projeto.status()).toBe('Não iniciado');

    projeto.getTarefas()[0].concluir();

    expect(projeto.status()).toBe('Finalizado');

    projeto.addTarefa(tarefa2);

    expect(projeto.status()).toBe('Em andamento');
  });
});
