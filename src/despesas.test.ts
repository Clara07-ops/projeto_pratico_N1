import {describe, it, expect} from 'vitest';
import {adicionarDespesa, removerDespesa, totalGasto} from './despesas.js';
import {Despesa} from './tipos.js';
//trazendo as funções e interface necessária para os testes

describe('adicionarDespesa', () => { //aqui é uma despesa padrão, base para os teste, é para evitar ter que ficar escrevendo de novo em cada teste
    const despesaValida: Despesa = { //aqui "despesaValida" é a constante 
        id: '1',
        descricao: 'Almoço',
        valor: 20.5,
        categoria: 'alimentação',
        mes: 5,
        observacao: 'Almoço com amigos'
    };
    
    it('tem que adicionar uma nova despesa a um array de despesas', () => {//o que está dentro () é o rotulo do teste
        const listaDeDespesas: Despesa[] = [];
        const resultado = adicionarDespesa(listaDeDespesas, despesaValida);
        expect(resultado).toContain(despesaValida); // Verifica se a nova despesa foi adicionada ao array
        expect(resultado.length).toBe(1); // Verifica se o array tem o tamanho correto
        expect(listaDeDespesas.length).toBe(0); // Verifica se o lista original não foi alterada
    });

    it('deve dar erro se o valor for menor ou igual a zero', () => {
        const despesaInvalida: Despesa = {...despesaValida, valor: 0};
        expect(() => adicionarDespesa([], despesaInvalida)).toThrow('Valor da despesa deve ser maior que zero'); // já aqui o que esta () é a mesnsagem exibida se der erro
    });

    it('deve dar erro se o mês for menor que 1 ou maior que 12', () => {
        const despesaInvalida: Despesa = {...despesaValida, mes: 13};
        expect(() => adicionarDespesa([], despesaInvalida)).toThrow('Mês da despesa deve ser entre 1 e 12');
    });
});

describe('removerDespesa', () => {
    const listaDeDespesas: Despesa[] = [
        { id: '1', descricao: 'Almoço', valor: 20.5, categoria: 'alimentação', mes: 5 },
        { id: '2', descricao: 'Transporte', valor: 15, categoria: 'transporte', mes: 5 },
    ];

    it('deve remover uma despesa existente pelo id e retornar o array atualizado', () => {
        const resultado = removerDespesa(listaDeDespesas, '1');
        expect(resultado).toHaveLength(1);
        expect(resultado[0].id).toBe('2');
        expect(listaDeDespesas.length).toBe(2); // Verifica se o array original não foi alterado
    });
    
    it('deve retornar o array original se o id não for identificado', () => {
        const resultado = removerDespesa(listaDeDespesas, '3');
        expect(resultado).toHaveLength(2);
        expect(resultado).toEqual(listaDeDespesas); // Verifica se o array original não foi alterado
    });
});

describe('totalGasto', () => {
    it('deve calcular o total gasto', () => {
        const listaDeDespesas: Despesa[] = [
            { id: '1', descricao: 'Almoço', valor: 20.5, categoria: 'alimentação', mes: 5 },
            { id: '2', descricao: 'Transporte', valor: 15, categoria: 'transporte', mes: 5 },
            { id: '3', descricao: 'Lazer', valor: 30, categoria: 'lazer', mes: 5 },
        ];
        const resultado = totalGasto(listaDeDespesas);
        expect(resultado).toBe(65.5); // Verifica se o total gasto está correto
    });
});