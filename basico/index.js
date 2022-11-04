// comentar mas de 1 linea: seleccionar lineas luego, ctrl + k + C
// DesComentar mas de 1 linea: seleccionar lineas luego, ctrl + k + U
//para manipular DOM
//*creamos variables, le damos nombre, y con el document.querySelector('etiqueta') le estaremos diciendo que es lo que debe leer. la etiqueta seria tal cual se escribiría en css.
//La variable puede tener cualquier nombre. se recomienda algo de fácil asociación.

const h1 = document.querySelector('h1')

const p = document.querySelector('p') //muestra el primero que encuentre

const pAll = document.querySelectorAll ('p') //muestra un array con todos los p

const pClass = document.querySelector('.parrafo2')
const pClassAll = document.getElementsByClassName ('.parrafo2') //NoRun

const pID = document.querySelector('#parrafo3')
const pIDs = document.getElementById('parrafo3')//*se coloca la id sin el #

const input = document.querySelector('input')

//para imprimir varias variable, se le pueden pasar a la consola como si fuera un objeto. 

// este modo de imprimir muestra las propiedades que se pueden 'leer' de cada objeto.
console.log({
    h1, p, pClass, pID, input, pAll, pClassAll, pIDs,
});
console.log(h1) //imprime solo el elemento y lo que contiene
console.log(input.value) //accediendo a la propiedad value de input.
            //vacío cuando se imprime, lleno cuando hay por defecto o se llena el input

//modificando HTML
    //inserta directamente código HTML
    h1.innerHTML = "Curso Básico de <br> Manipulación del DOM";

    //solo caracteres
    p.innerText = "Cambiando solo texto <br>"

    //Asignando atributos ('atributo', 'valor de css')
    h1.setAttribute('class', 'rojo'); //puedo modificar 'rojo' por otro elemento css declarado
    p.setAttribute('class', 'verde');
    input.classList.add('altura') //agrega la clase con su valor declarado
    input.value = "lidirez" //Modificando valor por defecto en este caso de value

    //Eliminado atributos
    input.classList.remove('formInput')

    //leer atributos
    h1.getAttribute('class')
        console.log(h1.getAttribute('class'))
        console.log(p.getAttribute('class'))
        console.log(input.getAttribute('class'))

    //Creando Elementos
    var img = document.createElement('img')
    img.setAttribute('src', './img/javascriptDOM.png') //asignando atributo y valor a la etiqueta img
        console.log(img) //para verlo en consola
    pID.append(img) //agregando atributo img a parrado con ID

    
    //Ejercicio Calculadora
    const entrada1 = document.querySelector('#input1')
    const entrada2 = document.querySelector('#input2')
    const btn = document.querySelector('#btnCalcular')
    const presult = document.querySelector('#resultado')

    function btnOnClick() {
        const suma = input1.value - input2.value
        presult.innerText = 'Resultado:' + suma  //esta suma esta concatenando
    }

    //Ejercicio form
    let name1 = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let btnform = document.getElementById('brtform')
    let btnsave = document.getElementById('btnsave')
    let names = document.getElementById('names')
    let form1 = document.getElementById('form')

    function btnsubmit(event){ //para escuchar cuando el btn es type submit
        let nombres = name1.value + lastname.value
        names.innerText = 'tus nombres son: ' + nombres
        console.log({event})
        event.preventDefault()
    }
    form1.addEventListener('submit', btnsubmit ) //1º argument es 'nombreDelEventoQueQueremosOir' 
                                                //2º argument será la function a ejecutar. sin paréntesis 


    function btnSave(){ //para escuchar cuando el btn es type button
        let nombres = name1.value + lastname.value
        names.innerText = 'Se Guardó el nombre de: ' + nombres
    }
    btnsave.addEventListener('click', btnSave )




