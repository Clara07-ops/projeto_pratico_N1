import {describe, it, expect} from 'vitest';
import { Despesa } from './tipos.js';
import { totalGasto, maiorDespesa } from './despesas.js';

// Ordem fixa das 4 categorias conforme a especificação do seu projeto
export const CATEGORIAS = ['alimentação', 'transporte', 'lazer', 'moradia'];

export function descricaoCategoria(categoria: string): string {
  switch (categoria.toLowerCase()) {
    case 'alimentação':
    case 'alimentacao':
      return 'Alimentação';
    case 'transporte':
      return 'Transporte';
    case 'lazer':
      return 'Lazer';
    case 'moradia':
      return 'Moradia';
    default:
      throw new Error('Categoria inválida');
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  // 1. Cria a matriz 4x12 zerada usando laços for tradicionais
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let j = 0; j < 12; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // 2. Preenche a matriz somando os valores das despesas
  for (let k = 0; k < despesas.length; k++) {
    const despesa = despesas[k];
    const mesIndex = despesa.mes - 1; // Mês 1 vira coluna 0

    // Descobre o índice da categoria usando laço for tradicional
    let catIndex = -1;
    for (let c = 0; c < CATEGORIAS.length; c++) {
      if (CATEGORIAS[c] === despesa.categoria) {
        catIndex = c;
        break;
      }
    }

    if (catIndex !== -1 && mesIndex >= 0 && mesIndex < 12) {
      matriz[catIndex][mesIndex] += despesa.valor;
    }
  }

  return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
  const titulo = 'RELATÓRIO ANUAL DE DESPESAS'.toUpperCase();
  let texto = `${titulo}\n${'='.repeat(40)}\n`;

  const matriz = matrizCategoriaMes(despesas);

  // Calcula e formata o total de cada categoria no ano
  for (let i = 0; i < CATEGORIAS.length; i++) {
    let totalCategoria = 0;
    for (let j = 0; j < 12; j++) {
      totalCategoria += matriz[i][j];
    }

    const nome = descricaoCategoria(CATEGORIAS[i]).padEnd(15, ' ');
    const valor = totalCategoria.toFixed(2).padStart(10, ' ');
    texto += `${nome}: R$ ${valor}\n`;
  }

  texto += `${'-'.repeat(40)}\n`;

  const totalGeral = totalGasto(despesas).toFixed(2);
  texto += `TOTAL GERAL: R$ ${totalGeral.padStart(10, ' ')}\n`;

  const maior = maiorDespesa(despesas);
  if (maior) {
    texto += `MAIOR DESPESA: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})\n`;
  } else {
    texto += `MAIOR DESPESA: Nenhuma despesa registrada\n`;
  }

  return texto;
}

// Exporta o alias caso seu teste use 'relatorio' como nome alternativo
export const relatorio = formatarRelatorio;