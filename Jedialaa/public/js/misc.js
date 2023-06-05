actualizarArregloEnInput();
repintarBotonesCapas();

var capaSeleccionada


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
        document.getElementById('listaCapas').insertAdjacentHTML('beforeend', `
            <div class="btn-capas row m-0 mb-2" style="height:35px">
                <div class="col-8 p-0">
                    <button onclick="resaltarCapa(`+index+`, '`+tipoTemp+`')" type="button" id="capa`+index+`" class="btn btn-light w-100 h-100 p-1 pl-2 text-start"> `+arreglo[index].nombre+` </button>
                </div>
                <div class="col-2 p-0">
                    <button type="button" onclick="subirCapa(`+index+`)" class="btn btn-light w-100 h-100 p-0">
                        <img src="`+arrow_up_img+`" alt="Raise layer" width="20" height="20">
                    </button>
                </div>
                <div class="col-2 p-0">
                    <button type="button" onclick="bajarCapa(`+index+`)" class="btn btn-light w-100 h-100 p-0">
                        <img src="`+arrow_down_img+`" alt="Lower layer" width="20" height="20">
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
    
    repintarBotonesCapas();

    resaltarCapa(num-1, arreglo[num-1].tipo);
}

function resaltarCapa(index, tipo) {
    // console.log("Se seleccionó una figura tipo " + tipo);
    capaSeleccionada = index
    quitarActivoEnCapas()

    document.getElementById('capa'+capaSeleccionada).classList.add('btn-capa-active')
    

    document.getElementById('capaname').innerHTML = arreglo[capaSeleccionada].nombre
    if(arreglo[capaSeleccionada].tipo == "rect"){
        document.getElementById('rect-properties').style.display = "block"

        document.getElementById('rect-x').value = arreglo[capaSeleccionada].x
        document.getElementById('rect-y').value = arreglo[capaSeleccionada].y
        document.getElementById('rect-ancho').value = arreglo[capaSeleccionada].ancho
        document.getElementById('rect-alto').value = arreglo[capaSeleccionada].alto
        document.getElementById('rect-color-relleno').value = arreglo[capaSeleccionada].colorRelleno
        document.getElementById('rect-color-contorno').value = arreglo[capaSeleccionada].colorContorno
        document.getElementById('rect-grosor-contorno').value = arreglo[capaSeleccionada].grosorContorno
        document.getElementById('rect-radio').value = 15
        document.getElementById('rect-opac-rell').value = 100
        document.getElementById('rect-opac-cont').value = 100
    }
    else if (arreglo[capaSeleccionada].tipo == "circ"){
        document.getElementById('ellipse-properties').style.display = "block"
    
        document.getElementById('ellipse-x').value = arreglo[capaSeleccionada].x
        document.getElementById('ellipse-y').value = arreglo[capaSeleccionada].y
        document.getElementById('ellipse-ancho').value = arreglo[capaSeleccionada].ancho
        document.getElementById('ellipse-alto').value = arreglo[capaSeleccionada].alto
        document.getElementById('ellipse-color-relleno').value = arreglo[capaSeleccionada].colorRelleno
        document.getElementById('ellipse-color-contorno').value = arreglo[capaSeleccionada].colorContorno
        document.getElementById('ellipse-grosor-contorno').value = arreglo[capaSeleccionada].grosorContorno
        document.getElementById('ellipse-opac-rell').value = 100
        document.getElementById('ellipse-opac-cont').value = 100
    }

    else if (arreglo[capaSeleccionada].tipo == "linea"){
        document.getElementById('line-properties').style.display = "block"
    
        document.getElementById('line-x1').value = arreglo[capaSeleccionada].x1
        document.getElementById('line-y1').value = arreglo[capaSeleccionada].y1
        document.getElementById('line-x2').value = arreglo[capaSeleccionada].x2
        document.getElementById('line-y2').value = arreglo[capaSeleccionada].y2
        document.getElementById('line-color-contorno').value = arreglo[capaSeleccionada].colorContorno
        document.getElementById('line-grosor-contorno').value = arreglo[capaSeleccionada].grosorContorno
        document.getElementById('line-opac-cont').value = 100
    }
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
    console.log("Se supone que se puso en el input el arreglo");
}


