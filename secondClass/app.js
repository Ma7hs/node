/***************************************************
1 - Obetivo: realizar a média escolar de 4 notas de alunos
2 - Data de Criação: 27 de Janeiro de 2023
3 - Autor: Matheus Siqueira Silva | github.com/ma7hs
4 - Versão: 1.0
****************************************************/

console.log("Sistema de cálculo de média escolares!")

//Import da biblioteca para entrada de dados do usuarios
var readline = require('readline');
const { isNumber } = require('util');

//Criando interface para realizar interação com usuário
var inputData = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

/*
VAR - Toda variavel criada como var tem como objetico ser um escopo global, sendo utilizada em diversos porntos da programação.

LET- Toda variavel como LET, temo como objetivo ser um escopo local, sendo utilizada somente naquela função.

CONST - Tem como objetivo criar um espaço em memória para armazenar dados que não sofrem mudança

Conversão de String para Números:
    1 - Para converter para FLOAT - Number.parseFloat() | parseFloat()
    2 - Para converter para INTS - Number.parseInt() | parseInt()
    3 - Para realizar a conversão sem especificar se é INT ou FLOAT Number() já basta

*/ 

//Função de CallBack para retornar o nome do aluno e suas notas em modo hierarquia
inputData.question(
    "Digite o nome do aluno: \n",
    function(nome){
        let nomeAluno = nome;

        inputData.question('Digite a Primeira Nota: \n', function(nota1){
            primeiraNota = nota1;

            inputData.question('Digite a Segunda Nota: \n', function(nota2){
                segundaNota = nota2;

                inputData.question('Digite a Terceira Nota: \n', function(nota3){
                    terceiraNota = nota3;

                    inputData.question('Digite a Quarta Nota: \n', function(nota4){
                        quartaNota = nota4;
                        
                        let media = 0;  

                        /*
                         * 1 - == (Verificar a igualdade) 
                         * 2 - != (Verificar se tem diferença)
                         * 3 - < (Verificar se é menor)
                         * 4 - > (Verificicar se é maior)
                         * 5 - <= (Verificar se é menor ou igual)
                         * 6 - >= (Verificar se é maior ou igual)
                         * 7 - === (Verificar a igualdade de conteudo e validar a tipagem de dados)
                         * 
                         * OPERADORES LÓGICOS
                         * 1 - OU   ||    OR
                         * 2 - E     &&     AND
                         * 3 - Negação   !    NOT
                         */

                        //Validação para entradas vazias de nota dos alunos!
                        
                        if (primeiraNota == "" ||  segundaNota == "" || terceiraNota == "" || quartaNota == ""){
                            console.log("Error! Voce esqueceu de digitar um valor");
                        }else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)){
                            console.log("Error! O tipo inserido não condiz! É necessário que seja um numero");
                        }else if(primeiraNota > 10 || primeiraNota < 0 || segundaNota > 10 || segundaNota < 0 || terceiraNota > 10 || terceiraNota < 0 ||
                            quartaNota > 10 | quartaNota < 10){
                                console.log("Error! Digite uma nota de 0 a 10!")
                        }
                        
                        else{
                            media = (Number.parseFloat(primeiraNota) + Number.parseFloat(segundaNota) + Number.parseFloat(terceiraNota) + Number.parseFloat(quartaNota)) / 4;
                            console.log('Essa é a média do '+ nomeAluno +':' + media);

                            if(media <= 6){
                                console.log(nomeAluno + " ! Foi reprovado, pois não atingiu a média necessária!")
                            }else{
                                console.log("Parabéns " + nomeAluno + " ,Aprovado com sucesso!")
                            }
                        }
                    })
                })
            })
        })
    })