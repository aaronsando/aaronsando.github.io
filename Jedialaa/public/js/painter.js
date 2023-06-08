var dibujando = false

var colorRellenoDefault
var opacRellDef
var colorContornoDefault
var opacContDef
var grosorDefault
var radioDef
var tamanioTextoDefault

var colorRellenoDefaultP5
var colorContornoDefaultP5

var colorFigP5

var figuraSeleccionada = 'cursor'

var mouseXInicial
var mouseYInicial
var mouseXFinal
var mouseYFinal

var canvasWidth
var canvasHeight = 850;


function setup() {
    var canvasDiv = document.getElementById("canvasparent");
    canvasWidth = canvasDiv.offsetWidth;

    grosorDefault = 1
    colorRellenoDefault = "#ffffff"
    colorContornoDefault = "#000000"
    opacRellDef = 255
    opacContDef = 255
    radioDef = 20
    tamanioTextoDefault = 25


    colorRellenoDefaultP5 = color(colorRellenoDefault)
    colorContornoDefaultP5 = color(colorContornoDefault)

    var canvas = createCanvas(canvasWidth, canvasHeight)
    canvas.parent("canvasparent")
    canvas.mousePressed(presionado);

    fill(colorRellenoDefault)
    stroke(colorContornoDefault)
    strokeWeight(grosorDefault)

}

function draw() {
    background(235)

    arreglo.forEach(figura => {
        if(figura.tipo=="texto"){
            fill(figura.color)
            textSize(figura.tamanio)
        }
        else{
            colorFigP5 = color(figura.colorRelleno)
            colorFigP5.setAlpha(figura.opacRell)
            fill(colorFigP5)
            
            colorFigP5 = color(figura.colorContorno)
            colorFigP5.setAlpha(figura.opacCont)
            stroke(colorFigP5)
            strokeWeight(figura.grosorContorno)
        }

        if(figura.visible){
            if (figura.tipo == "linea") {
                line(figura.x1, figura.y1, figura.x2, figura.y2)
            }
            else if (figura.tipo == "rect") {
                rect(figura.x, figura.y, figura.ancho, figura.alto, figura.radio)
            }
            else if (figura.tipo == "circ") {
                ellipse(figura.x, figura.y, figura.ancho, figura.alto)
            }
            else if (figura.tipo == "texto"){
                text(figura.contenido, figura.x, figura.y)
            }
        }
    });

    fill(colorRellenoDefaultP5)
    stroke(colorContornoDefaultP5)
    strokeWeight(grosorDefault)
    textSize(tamanioTextoDefault)
    

    if(dibujando){
        if(clickEnCanvas){
            if(figuraSeleccionada == "rect"){
                rect(mouseXInicial, mouseYInicial, mouseX-mouseXInicial, mouseY-mouseYInicial, radioDef)
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
    colorRellenoDefaultP5.setAlpha(100)
    fill(colorRellenoDefaultP5)
    
    mouseXInicial = mouseX
    mouseYInicial = mouseY
}

function mouseReleased() {
    dibujando = false

    colorRellenoDefaultP5.setAlpha(opacRellDef)
    fill(colorRellenoDefaultP5)

    mouseXFinal = mouseX
    mouseYFinal = mouseY

    if (clickEnCanvas()) {
        if(figuraSeleccionada == 'cursor'){
            clickEnFigura()
        }
        else if(figuraSeleccionada == 'texto'){
            crearTexto()
        }
        else{
            crearNuevaFigura()
        }
    }
    
    mouseXInicial = undefined
    mouseYInicial = undefined
}

function crearTexto() {
    var textito = prompt("Write your text", "Your text here")
    if(isBlank(textito)){
        return
    }
    cantTexto++
    arreglo.push({
        "nombre": "Text "+cantTexto,
        "contenido": textito,
        "x": mouseXFinal,
        "y": mouseYFinal,
        "tamanio": tamanioTextoDefault,
        "color": colorContornoDefault,
        "tipo": "texto",
        "visible": true
    })
    actualizarArregloEnInput()
    actualizarContadorFiguras()
    repintarBotonesCapas()
    resaltarCapa(arreglo.length-1, "texto")
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function crearNuevaFigura() {
    var tipoTemp
    if (figuraSeleccionada == 'linea') {
        cantLinea++
        tipoTemp = "linea"
        arreglo.push({
            "nombre": "Line "+cantLinea,
            "x1": mouseXInicial,
            "y1": mouseYInicial,
            "x2": mouseXFinal,
            "y2": mouseYFinal,
            "colorRelleno": colorRellenoDefault,
            "opacRell": opacRellDef,
            "colorContorno": colorContornoDefault,
            "opacCont": opacContDef,
            "grosorContorno": grosorDefault,
            "tipo": "linea",
            "visible": true
        })
    }
    else if (figuraSeleccionada == 'rect') {
        cantRect++
        tipoTemp = "rect"
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
            "colorRelleno": colorRellenoDefault,
            "opacRell": opacRellDef,
            "colorContorno": colorContornoDefault,
            "opacCont": opacContDef,
            "grosorContorno": grosorDefault,
            "radio": radioDef,
            "tipo": "rect",
            "visible": true
        })
    }
    else if (figuraSeleccionada == 'circ') {
        cantCirc++
        tipoTemp = "circ"
        arreglo.push({
            "nombre": "Ellipse "+cantCirc,
            "x": mouseXInicial + ((mouseXFinal - mouseXInicial) / 2),
            "y": mouseYInicial + ((mouseYFinal - mouseYInicial) / 2),
            "ancho": (mouseXFinal - mouseXInicial),
            "alto": (mouseYFinal - mouseYInicial),
            "colorRelleno": colorRellenoDefault,
            "opacRell": opacRellDef,
            "colorContorno": colorContornoDefault,
            "opacCont": opacContDef,
            "grosorContorno": grosorDefault,
            "tipo": "circ",
            "visible": true
        })
    }

    actualizarArregloEnInput()

    actualizarContadorFiguras()

    repintarBotonesCapas()

    resaltarCapa(arreglo.length-1, tipoTemp)
}





function clickEnFigura() {
    for (let index = (arreglo.length-1); index >= 0; index--) {
        if(arreglo[index].tipo == "rect"){
            if(clickEnRect(index)){
                resaltarCapa(index, "rect")
                return
            }
        }
        else if(arreglo[index].tipo == "circ"){
            if(clickEnCirc(index)){
                resaltarCapa(index, "circ")
                return
            }
        }
        else if(arreglo[index].tipo == "linea"){
            if(clickEnLinea(index)){
                resaltarCapa(index, "linea")
                return
            }
        }
    }
    quitarActivoEnCapas()
}

function clickEnRect(index) {
    if(arreglo[index].visible == false){
        return false
    }
    if(
        (mouseXFinal >= (arreglo[index].x - arreglo[index].grosorContorno)) && 
        (mouseXFinal <= (arreglo[index].x + arreglo[index].ancho + arreglo[index].grosorContorno)) &&
        (mouseY >= (arreglo[index].y - arreglo[index].grosorContorno)) && 
        (mouseY <= (arreglo[index].y + arreglo[index].alto + arreglo[index].grosorContorno))
        ){
            return true
    }
    return false
}
function clickEnCirc(index) {
    if(arreglo[index].visible == false){
        return false
    }

    var distance = Math.pow(mouseXFinal - arreglo[index].x, 2) / Math.pow((arreglo[index].ancho/2 + arreglo[index].grosorContorno/2), 2) + Math.pow(mouseYFinal - arreglo[index].y, 2) / Math.pow((arreglo[index].alto/2 + arreglo[index].grosorContorno/2), 2)
    if(distance < 1){
        return true 
    }
    return false
}
function clickEnLinea(index) {
    if(arreglo[index].visible == false){
        return false
    }

    var tolerance = 4;
    var m = (arreglo[index].y1 - arreglo[index].y2) / (arreglo[index].x1 - arreglo[index].x2);
    var b = arreglo[index].y1 - (m * arreglo[index].x1);
    var y = m * mouseXFinal + b;
    var delta = Math.abs(y - mouseYFinal);

    if (
        (delta < (tolerance+arreglo[index].grosorContorno/2)) && 
        (mouseXFinal >= (arreglo[index].x1 - (tolerance+arreglo[index].grosorContorno/2))) && 
        (mouseXFinal <= (arreglo[index].x2 + (tolerance+arreglo[index].grosorContorno/2))) && 
        (mouseYFinal >= (arreglo[index].y1 - (tolerance+arreglo[index].grosorContorno/2))) && 
        (mouseYFinal <= (arreglo[index].y2 + (tolerance+arreglo[index].grosorContorno/2)))
    ){
        return true
    } 
    return false
}

