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
        document.getElementById('listaCapas').insertAdjacentHTML('beforeend', `
            <div class="btn-capas row m-0 mb-2" style="height:35px">
                <div class="col-8 p-0">
                    <button onclick="resaltarCapa(`+index+`)" type="button" id="capa`+index+`" class="btn btn-light w-100 h-100 p-1 pl-2 text-start"> `+arreglo[index].nombre+` </button>
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
    document.getElementById('capa'+(num+1)).classList.add('btn-capa-active')
}

function bajarCapa( num ){
    if(num == 0){
        return 
    }
    
    var temp = arreglo[num]
    arreglo[num] = arreglo[num-1]
    arreglo[num-1] = temp
    
    repintarBotonesCapas();

    resaltarCapa(num-1);
}

function resaltarCapa(index) {
    capaSeleccionada = index
    quitarActivoEnCapas()
    document.getElementById('capa'+capaSeleccionada).classList.add('btn-capa-active')

    document.getElementById('capaname').innerHTML = arreglo[capaSeleccionada].nombre
    if(arreglo[capaSeleccionada].tipo == "rect" || arreglo[capaSeleccionada].tipo == "circ"){
        document.getElementById('xCoord').value = arreglo[capaSeleccionada].x
        document.getElementById('yCoord').value = arreglo[capaSeleccionada].y
        document.getElementById('ancho').value = arreglo[capaSeleccionada].ancho
        document.getElementById('alto').value = arreglo[capaSeleccionada].alto
    }
    document.getElementById('colorRelleno').value = arreglo[capaSeleccionada].colorRelleno
    document.getElementById('grosorContorno').value = arreglo[capaSeleccionada].grosorContorno
    document.getElementById('colorContorno').value = arreglo[capaSeleccionada].colorContorno
}


function quitarActivoEnCapas(){
    var arrBtnsCapasActivos = document.getElementsByClassName('btn-capa-active')
    for (let index = 0; index < arrBtnsCapasActivos.length; index++) {
        arrBtnsCapasActivos[index].classList.remove('btn-capa-active')
    }
    document.getElementById('capaname').innerHTML = "Selecciona una figura"
}


function actualizarArregloEnInput(){
    document.getElementById('txtFigureArray').value = JSON.stringify(arreglo)
    console.log("Se supone que se puso en el input el arreglo");
}


