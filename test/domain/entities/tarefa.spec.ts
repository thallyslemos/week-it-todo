import { Tarefa } from "src/domain/entidades/tarefa";

describe('Tarefa', ()=> {
    it('Deve criar um tarefa com titulo e descrição', ()=> {
        const tarefa =  new Tarefa({
            titulo: 'Tarefa 1',
            descricao: 'Descrição da tarefa 1'
        })
        expect(tarefa.getId()).toBeDefined();
        expect(tarefa.getTitulo()).toBe('Tarefa 1');
        expect(tarefa.getDescricao()).toBe('Descrição da tarefa 1');
        expect(tarefa.isFinalizada()).toBe(false);
        }
    )
})
it('Deve finalizar uma tarefa', ()=> {
    const tarefa =  new Tarefa({
        titulo: 'Tarefa 1',
        descricao: 'Descrição da tarefa 1'
    })
    tarefa.finalizar();
    expect(tarefa.isFinalizada()).toBe(true);
})
