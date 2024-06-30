// string: tudo que contém texto, palavras, geralmente dentro de aspas duplas
// number: toda variável que trata número, seja ele int, decimal, float, não há necessidade de declarar qual o tipo de variável number no js, e não há necessidade de aspas para ser declarada
// boolean: string para tratar verdadeiro ou falso ex: lula é ladrão? true ou falso?

// const é abreviação de constantes, que não da para alterar o valor após ter sido declarado
// variável é tudo aquilo que pode variar

const btn = document.getElementById('btn')
let p = document.getElementById('p')

btn.addEventListener('click', () => {
    p.innerText('Clicou!')
})
