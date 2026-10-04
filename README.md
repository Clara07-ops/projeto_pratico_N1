# Projeto Prático N1 - gerenciador de despesas

Módulo em Type Script que registra despesas de um mês e gera relatório por categoria.
---
O projeto contém TypeScript básico, funções e módulos, arrays/matrizes/strings, interfaces e testes com Vitest.
---
## Como instalar, testar e rodar o projeto
### Instalar as dependencias
npm init -y - criar o arquivo principal do projeto o package.json<br>
npm install -D typescript @types/node tsx - instala as ferramentas do TypeScript<br>
npm test - para rodar os teste com Vitest<br>
npx tsx src/inidex.ts para executar o programa principal<br>
---
## Arquivos para configuração
package.json: define os metadados, "dados sobre dados", do projeto, as dependências como o TypeScript e o Vitest.<br>
tsconfig.json: configura o ompilador do TypeScript, definindo as regras de checagem estática de tipos, versão e diretório de saída. Usei nesse projeto somente as essênciais.<br>
.gitignore: diz quais são as pastas e arquivos não devem ser rastreados pelo Git.<br>
---
## Registro do uso da Inteligencia Artificial
| Função | Descrição da Ajuda |
| --- | --- |
| adicionarDespesa | Ajudou na estruturação do array e validação dos campos obrigatórios |
| removerDespesa | Sugeriu a lógica para retirar uma despesa do array sem modifica-lo | 
| totalGasto | Ajudou a montar a lógica para somar os valores de todas as despesas |
| despesasPorCategoria | Oriientou como filtrar as despesas para encontrar apenas uma categoria específica |
| maiorDespesa | Ajudou explicando como encontrar o maior valor do array e como tratar caso a lista estiver vazia |
| descricaoCategoria | Ajudou na estrutura switch para converter e validar os nomes das caregorias |
| matrizCategoriaMes | Orientou a montagem da matriz usando apenas laços for |
| relatorio | Explicou como alinhar e formatar os textos 
---
## Reflexão sobre o uso da Inteligencia Artificial
    Durante o desenvolvimento do projeto com o auxilio da IA, foi necessário fazer ajustes em respostas onde a 
ferramenta sugeriu funções extras que não foram requisitadas. Além disso, ao acrescentar a função matrizCategoriaMes, a IA inicialmente propôs o uso de métodos como .map() e .forEach(), sendo necessário instruí-la novamente para atender à restrição de usar exclusivamente laços for. Por desconfiar da implementação com dados fora do padrão, acrescentei um teste específico na função descricaoCategoria que dispara um erro (toThrowError('Categoria inválida')) caso receba um valor não registrado pelo switch, garantindo a integridade dos relatórios.