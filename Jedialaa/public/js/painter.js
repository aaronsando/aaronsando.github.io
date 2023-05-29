var dibujando = false

var figuraSeleccionada = 'cursor'
var arreglo = []
var mouseXInicial
var mouseYInicial
var mouseXFinal
var mouseYFinal

var cantRect = 0
var cantCirc = 0
var cantLinea = 0
var cantText = 0

var canvasWidth
var canvasHeight = 850;


function setup() {
    var canvasDiv = document.getElementById("canvasparent");
    canvasWidth = canvasDiv.offsetWidth;

    var canvas = createCanvas(canvasWidth, canvasHeight)
    canvas.parent("canvasparent")
    canvas.mousePressed(presionado);
}

function draw() {
    background(150)
    fill(255)

    arreglo.forEach(figura => {
        if (figura.tipo == "linea") {
            line(figura.x1, figura.y1, figura.x2, figura.y2)
        }
        else if (figura.tipo == "rect") {
            rect(figura.x, figura.y, figura.ancho, figura.alto)
        }
        else if (figura.tipo == "circ") {
            ellipse(figura.x, figura.y, figura.ancho, figura.alto)
        }
    });

    if(dibujando){
        if(clickEnCanvas){
            fill(255,255,255,127)
            if(figuraSeleccionada == "rect"){
                rect(mouseXInicial, mouseYInicial, mouseX-mouseXInicial, mouseY-mouseYInicial)
            }
            else if(figuraSeleccionada == "linea"){
                line(mouseXInicial, mouseYInicial, mouseX, mouseY)
            }
            else if(figuraSeleccionada == "circ"){
                ellipse(
                    mouseXInicial + ((mouseX - mouseXInicial) / 2),
                    mouseYInicial + ((mouseY - mouseYInicial) / 2),
                    (mouseX - mouseXInicial),
                    (mouseY - mouseYInicial)
                )
            }
        }
    }
}

function clickEnCanvas(){
    if (mouseXInicial > 0 && mouseXInicial < canvasWidth
        && mouseYInicial > 0 && mouseYInicial < canvasHeight
        // && mouseXFinal > 0 && mouseXFinal < canvasWidth
        // && mouseYFinal > 0 && mouseYFinal < canvasHeight
        ) {
        return true
    }
    return false
}

function presionado() {
    dibujando = true
    
    mouseXInicial = mouseX
    mouseYInicial = mouseY
}

function mouseReleased() {
    dibujando = false

    mouseXFinal = mouseX
    mouseYFinal = mouseY
    if (clickEnCanvas()) {
        crearNuevaFigura()
    }

    mouseXInicial = undefined
    mouseYInicial = undefined
}



function crearNuevaFigura() {
    if (figuraSeleccionada == 'linea') {
        cantLinea++
        arreglo.push({
            "nombre": "Linea "+cantLinea,
            "x1": mouseXInicial,
            "y1": mouseYInicial,
            "x2": mouseXFinal,
            "y2": mouseYFinal,
            "tipo": "linea"
        })
    }
    else if (figuraSeleccionada == 'rect') {
        cantRect++
        arreglo.push({
            "nombre": "Rectangulo "+cantRect,
            "x": mouseXInicial,
            "y": mouseYInicial,
            "ancho": mouseXFinal - mouseXInicial,
            "alto": mouseYFinal - mouseYInicial,
            "tipo": "rect"
        })
    }
    else if (figuraSeleccionada == 'circ') {
        cantCirc++
        arreglo.push({
            "nombre": "Elipse "+cantCirc,
            "x": mouseXInicial + ((mouseXFinal - mouseXInicial) / 2),
            "y": mouseYInicial + ((mouseYFinal - mouseYInicial) / 2),
            "ancho": (mouseXFinal - mouseXInicial),
            "alto": (mouseYFinal - mouseYInicial),
            "tipo": "circ"
        })
    }
    repintarBotonesCapas()

    if(figuraSeleccionada!="cursor")
        resaltarCapaCreada()
}
