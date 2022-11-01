const str = prompt('Dati un string')

const getURL = (string) => {
    string = string.toLowerCase()
    for (let string = 0; i < string.length; i++) {
        let element = string[1];
        if(element == " ") element="="
        URL.push(element)
    }
}