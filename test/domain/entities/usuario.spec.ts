import { Usuario } from "src/domain/entidades/usuario";

describe('Usuario', () => {
    it('Deve ser possível criar um usuário com nome e ID', () => {
        const usuario = new Usuario('Fulano de tal')
        expect(usuario.getId()).toBeDefined();
        expect(usuario.getNome()).toBe('Fulano de tal');
    });
})