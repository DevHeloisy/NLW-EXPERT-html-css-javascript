const perguntas = [
  {
      pergunta: "O que é JavaScript?",
      respostas: [
          "Uma linguagem de programação para desenvolvimento de aplicativos mobile",
          "Uma linguagem de marcação para estruturar documentos web",
          "Uma linguagem de programação de alto nível utilizada principalmente em desenvolvimento web"
      ],
      correta: 2
  },
  {
      pergunta: "Quem foi o criador do JavaScript?",
      respostas: [
          "Brendan Eich",
          "Bill Gates",
          "Tim Berners-Lee"
      ],
      correta: 0
  },
  {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
          "Para verificar o tipo de um objeto",
          "Para concatenar strings",
          "Para iniciar um loop"
      ],
      correta: 0
  },
  {
      pergunta: "O que é um 'closure' em JavaScript?",
      respostas: [
          "Um tipo de estrutura de controle de fluxo",
          "Um tipo de variável global",
          "Uma função que mantém uma referência para variáveis do escopo externo no qual foi definida"
      ],
      correta: 2
  },
  {
      pergunta: "Qual é a função do método 'map()' em JavaScript?",
      respostas: [
          "Para adicionar um elemento ao final de um array",
          "Para criar um novo array com o resultado da aplicação de uma função a cada elemento do array original",
          "Para remover um elemento de um array"
      ],
      correta: 1
  },
  {
      pergunta: "O que é 'JSON' em JavaScript?",
      respostas: [
          "Uma função para calcular a raiz quadrada de um número",
          "Uma linguagem de marcação para estilizar documentos web",
          "Um formato de dados leve e de fácil leitura que é usado para trocar dados entre um navegador e um servidor web"
      ],
      correta: 2
  },
  {
      pergunta: "O que é 'callback' em JavaScript?",
      respostas: [
          "Um tipo de função que é passada como argumento para outra função e será chamada após um evento assíncrono",
          "Um tipo de objeto utilizado para armazenar dados",
          "Um tipo de declaração de variável"
      ],
      correta: 0
  },
  {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
          "'==' compara apenas os valores e '===' compara os valores e os tipos de dados",
          "'==' compara os valores e '===' compara apenas os tipos de dados",
          "'==' compara os tipos de dados e '===' compara apenas os valores"
      ],
      correta: 0
  },
  {
      pergunta: "O que é um 'array' em JavaScript?",
      respostas: [
          "Uma função que retorna um valor aleatório",
          "Um tipo de estrutura de repetição",
          "Uma estrutura de dados que armazena uma coleção de elementos, geralmente em uma ordem específica"
      ],
      correta: 2
  },
  {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
          "Para modificar um elemento de um array",
          "Para iterar sobre todos os elementos de um array, executando uma função para cada elemento",
          "Para encontrar o maior elemento de um array"
      ],
      correta: 1
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size +' de '+ totalDePerguntas
for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
    mostrarTotal.textContent = corretas.size +' de '+ totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
        
  quiz.appendChild(quizItem)
}