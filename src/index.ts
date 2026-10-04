import {Despesa} from './tipos.js';
import {relatorio} from './relatorio.js';

const despesasEx: Despesa[] = [
    { id:'1', descricao: 'Almoço', valor: 200, categoria: 'alimentação', mes: 1 },
    { id:'2', descricao: 'Jantar', valor: 200, categoria: 'alimentação', mes: 1 },
    { id:'3', descricao: 'Uber', valor: 50, categoria: 'transporte', mes: 1 },
    { id:'4', descricao: 'Cinema', valor: 40, categoria: 'lazer', mes: 2 },
    { id:'5', descricao: 'Aluguel', valor: 1000, categoria: 'moradia', mes: 2 },
    { id:'6', descricao: 'Supermercado', valor: 400, categoria: 'alimentação', mes: 2 },
    { id:'7', descricao: 'Conta de luz', valor: 150, categoria: 'moradia', mes: 3 },
    { id:'8', descricao: 'Ônibus', valor: 60, categoria: 'transporte', mes: 3 },
];

console.log('Relatório de Despesas:');
const relatorioFinal = relatorio(despesasEx);
console.log(relatorioFinal);