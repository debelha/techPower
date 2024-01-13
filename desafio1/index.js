/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let XP;
let name;

rl.question("Qual o nome do seu herói? ", function(answer1) {
  name = answer1;
  console.log("Olá, " + name);

  rl.question("Quantos XP você tem? ", function(answer2) {
    XP = answer2;

    if (XP < 1000) {
      console.log("O herói " + name + " está no nível de ferro.");
    } else if (XP <= 2000) {
      console.log("O herói " + name + " está no nível de bronze.");
    } else if (XP <= 5000) {
      console.log("O herói " + name + " está no nível de prata.");
    } else if (XP <= 7000) {
      console.log("O herói " + name + " está no nível de ouro.");
    } else if (XP <= 8000) {
      console.log("O herói " + name + " está no nível de platina.");
    } else if (XP <= 9000) {
      console.log("O herói " + name + " está no nível de ascendente.");
    } else if (XP <= 10000) {
      console.log("O herói " + name + " está no nível de imortal.");
    } else {
      console.log("O herói " + name + " está no nível de radiante.");
    }

    rl.close();
  });
});

// Adiciona um ouvinte de evento para quando a interface de leitura for fechada.
rl.on('close', function() {
  process.exit(0); // Encerra o processo Node.js
});
