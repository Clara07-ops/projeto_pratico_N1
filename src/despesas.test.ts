import {describe, it, expect} from 'vitest';
import {adicionarDespesa} from './despesas.js';
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