actualizarArregloEnInput()
actualizarContadorFiguras()
repintarBotonesCapas()

var capaSeleccionada

function cambiarVisibilidad( index ) {
    arreglo[index].visible ? arreglo[index].visible=false : arreglo[index].visible=true

    actualizarArregloEnInput()
    repintarBotonesCapas()
    resaltarCapa(index, arreglo[index].tipo)
}


function guardar(){
    actualizarContadorFiguras()
    actualizarArregloEnInput()
    actualizarDataURL()
    document.getElementById('formGuardarProyecto').submit()
}

function actualizarContadorFiguras() {
    document.getElementById('line_counter').value = cantLinea
    document.getElementById('rect_counter').value = cantRect
    document.getElementById('ellipse_counter').value = cantCirc
    document.getElementById('text_counter').value = cantTexto
}

function actualizarDataURL() {
    document.getElementById('imgDataURL').value = myCanvas.elt.toDataURL("image/jpeg", 0.5)
    console.log("Se actualizo el dataurl");
}

function actualizarPropiedades(){
    if(arreglo[capaSeleccionada].tipo == "rect"){
        actualizarPropiedadesRect()
    }
    else if (arreglo[capaSeleccionada].tipo == "circ"){
        actualizarPropiedadesCirc()
    }

    else if (arreglo[capaSeleccionada].tipo == "linea"){
        actualizarPropiedadesLinea()
    }

    else if (arreglo[capaSeleccionada].tipo == "texto"){
        actualizarPropiedadesTexto()
    }
    actualizarArregloEnInput()
}

function selecBotonFigura( selected, btnid ){
    figuraSeleccionada = selected

    var arrBtnsFiguras = document.getElementsByClassName('btn-figura')
    
    for (let index = 0; index < arrBtnsFiguras.length; index++) {
        if((index) == btnid) {
            arrBtnsFiguras[index].classList.add('btn-active')
        }
        else{
            arrBtnsFiguras[index].classList.remove('btn-active')
        }
    }
    
    quitarActivoEnCapas()
}

function repintarBotonesCapas() {
    var arrBotonesCapas = document.getElementsByClassName('btn-capas')
    //Borrar
    while(arrBotonesCapas.length>0){
        arrBotonesCapas[0].remove();
    }
    //Crear
    for (let index = arreglo.length-1; index >= 0; index--) {

        var tipoTemp = arreglo[index].tipo
        
        var visibilidad = visible_img
        var claseBtnVisib = "btn-light"

        if(arreglo[index].visible == false){
            visibilidad = invisible_img
            claseBtnVisib = "btn-secondary"
        }

        // arreglo[index].visible ? visibilidad = visible_img : visibilidad = invisible_img
        document.getElementById('listaCapas').insertAdjacentHTML('beforeend', `
            <div class="btn-capas row m-0 mb-2" style="height:35px">
                <div class="col-8 p-0">
                    <button onclick="resaltarCapa(`+index+`, '`+tipoTemp+`')" type="button" id="capa`+index+`" class="btn btn-light w-100 h-100 p-1 pl-2 text-start"> `+arreglo[index].nombre+` </button>
                </div>
                <div class="col-1 p-0">
                    <button type="button" onclick="cambiarVisibilidad(`+index+`)" class="btn `+claseBtnVisib+` w-100 h-100 p-0">
                        <img src="`+visibilidad+`" alt="Visibility" width="20" height="20">
                    </button>
                </div>
                <div class="col-1 p-0">
                    <button type="button" onclick="subirCapa(`+index+`)" class="btn btn-light w-100 h-100 p-0">
                        <img src="`+arrow_up_img+`" alt="Raise layer" width="20" height="20">
                    </button>
                </div>
                <div class="col-1 p-0">
                    <button type="button" onclick="bajarCapa(`+index+`)" class="btn btn-light w-100 h-100 p-0">
                        <img src="`+arrow_down_img+`" alt="Lower layer" width="20" height="20">
                    </button>
                </div>
                <div class="col-1 p-0">
                    <button type="button" onclick="eliminarCapa(`+index+`)" class="btn btn-light w-100 h-100 p-0">
                        <img src="`+trash_img+`" alt="Delete layer" width="16" height="16">
                    </button>
                </div>
            </div>`);
    }
}

function subirCapa( num ){
    if(num == arreglo.length-1){
        return 
    }

    var temp = arreglo[num]
    arreglo[num] = arreglo[num+1]
    arreglo[num+1] = temp

    actualizarArregloEnInput()
    repintarBotonesCapas();
    resaltarCapa(num+1, arreglo[num+1].tipo)
}

function bajarCapa( num ){
    if(num == 0){
        return 
    }
    
    var temp = arreglo[num]
    arreglo[num] = arreglo[num-1]
    arreglo[num-1] = temp
    
    actualizarArregloEnInput()
    repintarBotonesCapas();
    resaltarCapa(num-1, arreglo[num-1].tipo);
}

function eliminarCapa( num ) {
    arreglo.splice(num, 1)

    actualizarArregloEnInput()
    repintarBotonesCapas()
}

function resaltarCapa(index, tipo) {
    capaSeleccionada = index
    quitarActivoEnCapas()

    document.getElementById('capa'+capaSeleccionada).classList.add('btn-capa-active')
    

    document.getElementById('capaname').innerHTML = arreglo[capaSeleccionada].nombre
    if(arreglo[capaSeleccionada].tipo == "rect"){
        mostrarPropiedadesRect()
    }
    else if (arreglo[capaSeleccionada].tipo == "circ"){
        mostrarPropiedadesCirc()
    }

    else if (arreglo[capaSeleccionada].tipo == "linea"){
        mostrarPropiedadesLinea()
    }

    else if (arreglo[capaSeleccionada].tipo == "texto"){
        mostrarPropiedadesTexto()
    }

}

function mostrarPropiedadesRect() {
    document.getElementById('rect-properties').style.display = "block"

    document.getElementById('rect-x').value = arreglo[capaSeleccionada].x
    document.getElementById('rect-y').value = arreglo[capaSeleccionada].y
    document.getElementById('rect-ancho').value = arreglo[capaSeleccionada].ancho
    document.getElementById('rect-alto').value = arreglo[capaSeleccionada].alto
    document.getElementById('rect-color-relleno').value = arreglo[capaSeleccionada].colorRelleno
    document.getElementById('rect-opac-rell').value = arreglo[capaSeleccionada].opacRell
    document.getElementById('rect-color-contorno').value = arreglo[capaSeleccionada].colorContorno
    document.getElementById('rect-grosor-contorno').value = arreglo[capaSeleccionada].grosorContorno
    document.getElementById('rect-opac-cont').value = arreglo[capaSeleccionada].opacCont
    document.getElementById('rect-radio').value = arreglo[capaSeleccionada].radio
}

function mostrarPropiedadesCirc() {
    document.getElementById('ellipse-properties').style.display = "block"
    
    document.getElementById('ellipse-x').value = arreglo[capaSeleccionada].x
    document.getElementById('ellipse-y').value = arreglo[capaSeleccionada].y
    document.getElementById('ellipse-ancho').value = arreglo[capaSeleccionada].ancho
    document.getElementById('ellipse-alto').value = arreglo[capaSeleccionada].alto
    document.getElementById('ellipse-color-relleno').value = arreglo[capaSeleccionada].colorRelleno
    document.getElementById('ellipse-color-contorno').value = arreglo[capaSeleccionada].colorContorno
    document.getElementById('ellipse-grosor-contorno').value = arreglo[capaSeleccionada].grosorContorno
    document.getElementById('ellipse-opac-rell').value = arreglo[capaSeleccionada].opacRell
    document.getElementById('ellipse-opac-cont').value = arreglo[capaSeleccionada].opacCont
}

function mostrarPropiedadesLinea() {
    document.getElementById('line-properties').style.display = "block"
    
    document.getElementById('line-x1').value = arreglo[capaSeleccionada].x1
    document.getElementById('line-y1').value = arreglo[capaSeleccionada].y1
    document.getElementById('line-x2').value = arreglo[capaSeleccionada].x2
    document.getElementById('line-y2').value = arreglo[capaSeleccionada].y2
    document.getElementById('line-color-contorno').value = arreglo[capaSeleccionada].colorContorno
    document.getElementById('line-grosor-contorno').value = arreglo[capaSeleccionada].grosorContorno
    document.getElementById('line-opac-cont').value = arreglo[capaSeleccionada].opacCont
}

function mostrarPropiedadesTexto() {
    document.getElementById('text-properties').style.display = "block"
    
    document.getElementById('text-contenido').value = arreglo[capaSeleccionada].contenido
    document.getElementById('text-x').value = arreglo[capaSeleccionada].x
    document.getElementById('text-y').value = arreglo[capaSeleccionada].y
    document.getElementById('text-tamanio').value = arreglo[capaSeleccionada].tamanio
    document.getElementById('text-color').value = arreglo[capaSeleccionada].color
}

function quitarActivoEnCapas(){
    var arrBtnsCapasActivos = document.getElementsByClassName('btn-capa-active')
    for (let index = 0; index < arrBtnsCapasActivos.length; index++) {
        arrBtnsCapasActivos[index].classList.remove('btn-capa-active')
    }

    document.getElementById('capaname').innerHTML = "Select a shape"

    var arrPanelesPropiedades = document.getElementsByClassName('properties-panel')
    for (let index = 0; index < arrPanelesPropiedades.length; index++) {
        arrPanelesPropiedades[index].style.display = "none"
    }
}

function actualizarArregloEnInput(){
    document.getElementById('txtFigureArray').value = JSON.stringify(arreglo)
}

function actualizarPropiedadesRect(){
    arreglo[capaSeleccionada].x = parseFloat(document.getElementById('rect-x').value)
    arreglo[capaSeleccionada].y = parseFloat(document.getElementById('rect-y').value)
    arreglo[capaSeleccionada].ancho = parseFloat(document.getElementById('rect-ancho').value)
    arreglo[capaSeleccionada].alto = parseFloat(document.getElementById('rect-alto').value)
    arreglo[capaSeleccionada].colorRelleno = document.getElementById('rect-color-relleno').value
    arreglo[capaSeleccionada].opacRell = parseFloat(document.getElementById('rect-opac-rell').value)
    arreglo[capaSeleccionada].colorContorno = document.getElementById('rect-color-contorno').value
    arreglo[capaSeleccionada].grosorContorno = parseFloat(document.getElementById('rect-grosor-contorno').value)
    arreglo[capaSeleccionada].opacCont = parseFloat(document.getElementById('rect-opac-cont').value)
    arreglo[capaSeleccionada].radio = document.getElementById('rect-radio').value
}

function actualizarPropiedadesCirc(){
    arreglo[capaSeleccionada].x = parseFloat(document.getElementById('ellipse-x').value)
    arreglo[capaSeleccionada].y = parseFloat(document.getElementById('ellipse-y').value)
    arreglo[capaSeleccionada].ancho = parseFloat(document.getElementById('ellipse-ancho').value)
    arreglo[capaSeleccionada].alto = parseFloat(document.getElementById('ellipse-alto').value)
    arreglo[capaSeleccionada].colorRelleno = document.getElementById('ellipse-color-relleno').value
    arreglo[capaSeleccionada].opacRell = parseFloat(document.getElementById('ellipse-opac-rell').value)
    arreglo[capaSeleccionada].colorContorno = document.getElementById('ellipse-color-contorno').value
    arreglo[capaSeleccionada].grosorContorno = parseFloat(document.getElementById('ellipse-grosor-contorno').value)
    arreglo[capaSeleccionada].opacCont = parseFloat(document.getElementById('ellipse-opac-cont').value)
}

function actualizarPropiedadesLinea(){
    arreglo[capaSeleccionada].x1 = parseFloat(document.getElementById('line-x1').value)
    arreglo[capaSeleccionada].y1 = parseFloat(document.getElementById('line-y1').value)
    arreglo[capaSeleccionada].x2 = parseFloat(document.getElementById('line-x2').value)
    arreglo[capaSeleccionada].y2 = parseFloat(document.getElementById('line-y2').value)
    arreglo[capaSeleccionada].colorContorno = document.getElementById('line-color-contorno').value
    arreglo[capaSeleccionada].grosorContorno = parseFloat(document.getElementById('line-grosor-contorno').value)
    arreglo[capaSeleccionada].opacCont = parseFloat(document.getElementById('line-opac-cont').value)
}

function actualizarPropiedadesTexto() {
    arreglo[capaSeleccionada].contenido = document.getElementById('text-contenido').value
    arreglo[capaSeleccionada].x = parseFloat(document.getElementById('text-x').value)
    arreglo[capaSeleccionada].y = parseFloat(document.getElementById('text-y').value)
    arreglo[capaSeleccionada].tamanio = parseFloat(document.getElementById('text-tamanio').value)
    arreglo[capaSeleccionada].color = document.getElementById('text-color').value
}

