import {Despesa} from './tipos.js';
import {descricaoCategoria, matrizCategoriaMes, relatorio} from './relatorio.js';
import { describe, it, expect } from 'vitest';

describe ('Relatório de Despesas', () => {
    const listaDeDespesas: Despesa[] = [
        { id:'1', categoria: 'alimentação', 'descricao': 'Almoço', valor: 50, mes: 1 },
        { id:'2', categoria: 'alimentação', 'descricao': 'Jantar', valor: 30, mes: 1 },
        { id:'3', categoria: 'transporte', 'descricao': 'Uber', valor: 20, mes: 1 },
    ];  

describe ('descricaoCategoria', () => {
    it('deve retornar a descrição correta usando switch', () => {
        expect(descricaoCategoria('alimentação')).toBe('Alimentação');
        expect(descricaoCategoria('transporte')).toBe('Transporte');
        expect(descricaoCategoria('lazer')).toBe('Lazer');
        expect(descricaoCategoria('moradia')).toBe('Moradia');
        expect(() => descricaoCategoria('outra')).toThrowError('Categoria inválida');
    });
});

describe('matrizCategoriaMes', () => {
    it('deve retornar a matriz correta de categorias por mês, sendo 4 linhas (categorias) e 12 colunas (meses)', () => {
        const matriz = matrizCategoriaMes(listaDeDespesas);
        expect(matriz).toHaveLength(4); // 4 categorias
        expect(matriz[0]).toHaveLength(12); // 12 meses
        expect(matriz[0][0]).toBe(80);
    });
});

describe('relatorio', () => {
    it('deve retornar o relatório correto em formato de string', () => {
        const resultado = relatorio(listaDeDespesas);
        expect(resultado).toContain('Relatório de Despesas');
        expect(resultado).toContain('Total gasto');
        });
    });
});


