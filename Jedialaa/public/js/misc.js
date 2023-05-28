function selectFigure( selected, btnid ){
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
}