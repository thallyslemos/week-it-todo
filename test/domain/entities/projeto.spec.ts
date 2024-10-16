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
});
