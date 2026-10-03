export type categoria = 'alimentação' | 'transporte' | 'lazer' | 'moradia';
//Aqui union type para definir as categorias das despesas restringindo a uma das quatro opções

export const CATEGORIAS: readonly categoria[] = [
    'alimentação',
    'transporte',
    'lazer',
    'moradia'
]
//Aqui array para armazenar as categorias das despesas, que são as mesmas do union type acima.
// "readonly categoria[]" diz que o array não pode ser alterado

export interface Despesa{//interface "contrato"/"regras" para definir o que contem em despesa
    readonly id: string; // "readonly" indica que o campo não pode ser alterado depois de criado
    descricao: string; //descrição da despesa, campo obrigatório
    valor: number; //valor (numérico) da despesa, campo obrigatório
    categoria: categoria; //categoria da despesa, campo obrigatório, que deve ser uma das opções de "categoria"
    mes: number; //mes da despesa, campo obrigatório, que deve ser um número de 1 a 12
    observacao?: string; // "?" indica que o campo é opcional
}