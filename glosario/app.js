const definiciones = [
    {nombre: 'barrena', definicion: 'herramienta para triturar.'},
    {nombre: 'petróleo', definicion: 'sustancia viscosa.'},
    {nombre: 'geología', definicion: 'ciencia que estudia los fenomenos fisícos Tierra.'},
] 


// Aqui se almacena lo que el uduario escribe (lo de input)
const formulario = document.querySelector('#formulario');
// Aqui se registra el click al boton
const boton = document.querySelector('#boton');
// Constante de resultado
const resultado = document.querySelector('#resultado')

const filtrar = () => {

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase()

    for(let i of definiciones){
        let nombre = i.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${i.nombre} -Valor: ${i.definicion}</li> 
            `
            
        }
    }
    
    if (resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Producto no encontrado</li> 
        `
    }
}



boton.addEventListener('click', filtrar)
// formulario.addEventListener('keyup', filtrar)
