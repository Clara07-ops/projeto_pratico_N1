import {Despesa} from './tipos.js';

export function adicionarDespesa(despesas: Despesa[], novaDespesa: Despesa): Despesa[] {
    if (novaDespesa.valor <= 0) {
        throw new Error('Valor da despesa deve ser maior que zero');
    }
    if (novaDespesa.mes < 1 || novaDespesa.mes > 12) {
        throw new Error('Mês da despesa deve ser entre 1 e 12');
    }
    return [...despesas, novaDespesa];
}

export function removerDespesa(despesas: Despesa[], id: string): Despesa[] {
    return despesas.filter(despesa => despesa.id !== id); // Retorna um novo array com itens com id diferente do passado
}

export function totalGasto(despesas: Despesa[]): number {
    return despesas.reduce((total, despesa) => total + despesa.valor, 0); 
}