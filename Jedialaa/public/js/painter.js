var dibujando = false

var grosorDefault = 2

var figuraSeleccionada = 'cursor'

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

    strokeWeight(grosorDefault)
}

function draw() {
    background(150)
    fill(255)

    arreglo.forEach(figura => {
        strokeWeight(figura.grosor)
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

    strokeWeight(grosorDefault)

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
        && mouseYInicial > 0 && mouseYInicial < canvasHeight) {
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
        if(figuraSeleccionada == 'cursor'){
            clickEnFigura()
        }
        else{
            crearNuevaFigura()
        }
    }

    mouseXInicial = undefined
    mouseYInicial = undefined
}



function crearNuevaFigura() {
    if (figuraSeleccionada == 'linea') {
        cantLinea++

        // if(mouseXInicial > mouseXFinal || mouseYInicial > mouseYFinal){
        //     [mouseYInicial, mouseYFinal] = [mouseYFinal, mouseYInicial];
        //     [mouseXInicial, mouseXFinal] = [mouseXFinal, mouseXInicial];
        // }
        
        arreglo.push({
            "nombre": "Line "+cantLinea,
            "x1": mouseXInicial,
            "y1": mouseYInicial,
            "x2": mouseXFinal,
            "y2": mouseYFinal,
            "grosor": grosorDefault,
            "tipo": "linea"
        })
    }
    else if (figuraSeleccionada == 'rect') {
        cantRect++

        if(mouseXInicial > mouseXFinal)
            [mouseXInicial, mouseXFinal] = [mouseXFinal, mouseXInicial]
        if(mouseYInicial > mouseYFinal)
            [mouseYInicial, mouseYFinal] = [mouseYFinal, mouseYInicial]
        

        arreglo.push({
            "nombre": "Rectangle "+cantRect,
            "x": mouseXInicial,
            "y": mouseYInicial,
            "ancho": mouseXFinal - mouseXInicial,
            "alto": mouseYFinal - mouseYInicial,
            "grosor": grosorDefault,
            "tipo": "rect"
        })
    }
    else if (figuraSeleccionada == 'circ') {
        cantCirc++
        arreglo.push({
            "nombre": "Ellipse "+cantCirc,
            "x": mouseXInicial + ((mouseXFinal - mouseXInicial) / 2),
            "y": mouseYInicial + ((mouseYFinal - mouseYInicial) / 2),
            "ancho": (mouseXFinal - mouseXInicial),
            "alto": (mouseYFinal - mouseYInicial),
            "grosor": grosorDefault,
            "tipo": "circ"
        })
    }

    actualizarArregloEnInput()

    repintarBotonesCapas()

    resaltarCapa(arreglo.length-1)
}





function clickEnFigura(){
    for (let index = (arreglo.length-1); index >= 0; index--) {
        if(arreglo[index].tipo == "rect"){
            if(clickEnRect(index)){
                // alert("Click en "+arreglo[index].nombre)
                resaltarCapa(index)
                return
            }
        }
        else if(arreglo[index].tipo == "circ"){
            if(clickEnCirc(index)){
                // alert("Click en "+arreglo[index].nombre)
                resaltarCapa(index)
                return
            }
        }
        else if(arreglo[index].tipo == "linea"){
            if(clickEnLinea(index)){
                // alert("Click en "+arreglo[index].nombre)
                resaltarCapa(index)
                return
            }
        }
    }
}

function clickEnRect(index) {
    if(
        (mouseXFinal >= arreglo[index].x - arreglo[index].grosor/2) && 
        (mouseXFinal <= (arreglo[index].x + arreglo[index].ancho + arreglo[index].grosor/2)) &&
        (mouseY >= arreglo[index].y - arreglo[index].grosor/2) && 
        (mouseY <= (arreglo[index].y + arreglo[index].alto + arreglo[index].grosor/2))
        ){
            return true
    }
    return false
}
function clickEnCirc(index) {
    var distance = Math.pow(mouseXFinal - arreglo[index].x, 2) / Math.pow((arreglo[index].ancho/2 + arreglo[index].grosor/2), 2) + Math.pow(mouseYFinal - arreglo[index].y, 2) / Math.pow((arreglo[index].alto/2 + arreglo[index].grosor/2), 2)
    if(distance < 1){
        return true 
    }
    return false
}
function clickEnLinea(index){
    var tolerance = 4;
    var m = (arreglo[index].y1 - arreglo[index].y2) / (arreglo[index].x1 - arreglo[index].x2);
    var b = arreglo[index].y1 - (m * arreglo[index].x1);
    var y = m * mouseXFinal + b;
    var delta = Math.abs(y - mouseYFinal);

    if (
        (delta < (tolerance+arreglo[index].grosor/2)) && 
        (mouseXFinal >= (arreglo[index].x1 - (tolerance+arreglo[index].grosor/2))) && 
        (mouseXFinal <= (arreglo[index].x2 + (tolerance+arreglo[index].grosor/2))) && 
        (mouseYFinal >= (arreglo[index].y1 - (tolerance+arreglo[index].grosor/2))) && 
        (mouseYFinal <= (arreglo[index].y2 + (tolerance+arreglo[index].grosor/2)))
    ){
        return true
    } 
    return false
}