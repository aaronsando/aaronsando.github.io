function seleccionarFigura( selected, btnid ){
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
    
    var arrBtnsCapasActivos = document.getElementsByClassName('btn-capa-active')
    for (let index = 0; index < arrBtnsCapasActivos.length; index++) {
        arrBtnsCapasActivos[index].classList.remove('btn-capa-active')
    }

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
                    <button type="button" id="capa`+index+`" class="btn btn-light w-100 h-100 p-1 pl-2 text-start"> `+arreglo[index].nombre+` </button>
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
        alert("No se puede chamaco tonto");
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
        alert("No se puede chamaco tonto");
        return 
    }
    
    var temp = arreglo[num]
    arreglo[num] = arreglo[num-1]
    arreglo[num-1] = temp
    
    repintarBotonesCapas();

    document.getElementById('capa'+(num-1)).classList.add('btn-capa-active')
}

function resaltarCapaCreada() {
    document.getElementById('capa'+(arreglo.length-1)).classList.add('btn-capa-active')
}