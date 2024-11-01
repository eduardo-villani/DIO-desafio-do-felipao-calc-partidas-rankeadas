// # 2️⃣ Calculadora de partidas Rankeadas
// Creating variables

let victoriesAchieved, defeatsAchieved, level, balance;

// assigning values to the variables
victoriesAchieved = 50;
defeatsAchieved = 10;

// creating functions

function calcBalance(victoriesAchieved, defeatsAchieved) {
  return victoriesAchieved - defeatsAchieved;
}

function getRankLevel(balance) {
  if (balance < 10) {
    return "Ferro";
  } else if (balance >= 11 && balance <= 20) {
    return "Bronze";
  } else if (balance >= 21 && balance <= 50) {
    return "Prata";
  } else if (balance >= 51 && balance <= 80) {
    return "Ouro";
  } else if (balance >= 81 && balance <= 90) {
    return "Diamante";
  } else if (balance >= 91 && balance <= 100) {
    return "Lendário";
  } else if (balance >= 101) {
    return "Imortal";
  } else return "Jogue para saber seu nível";
}

// program call

balance = calcBalance(victoriesAchieved, defeatsAchieved);
level = getRankLevel(balance);

// program output
console.log(
  `O Herói tem de saldo de **{${balance}}** está no nível de **{${level}}**`
);

// credits Edardo Villani

/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/
