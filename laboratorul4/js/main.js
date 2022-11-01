const numar1 = Number(prompt('Dati primul numar'))
const numar2 = Number(prompt('Dati al doilea numar'))
const operator = prompt('Dati operatorul')

const  suma = () => alert(`Suma este: ${numar1 + numar2}`)
const  diferenta = () => alert(`Diferenta este: ${numar1 - numar2}`)
const  produs = () => alert(`Produs este: ${numar1 * numar2}`)
const  catul = () => alert(`Catul este: ${numar1 / numar2}`)
const  restul = () => alert(`Restul este: ${numar1 % numar2}`)
switch (operator) {
    case '+':
        suma()
        break;

    case '+':
            diferenta()
        break;

    case '*':
            produs()
        break;

     case '/':
            catul()
        break;

    case '%':
            restul()
        break;
    default:
        break;
}