<div id="line-properties" class="properties-panel" style="display:none">
    {{-- <h1>LINEA</h1> --}}
    <div class="input-group">
        <span class="input-group-text">X1</span>
        <input id="line-x1" onchange="actualizarPropiedades()" type="text" aria-label="X" class="form-control">
        <span class="input-group-text">Y1</span>
        <input id="line-y1" onchange="actualizarPropiedades()" type="text" aria-label="Y" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">X2</span>
        <input id="line-x2" onchange="actualizarPropiedades()" type="text" aria-label="X" class="form-control">
        <span class="input-group-text">Y2</span>
        <input id="line-y2" onchange="actualizarPropiedades()" type="text" aria-label="Y" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">Stroke</span>
        <input id="line-grosor-contorno" onchange="actualizarPropiedades()" type="text" class="form-control">
        <input id="line-color-contorno" onchange="actualizarPropiedades()" type="color" class="form-control form-control-color">
    </div>
    <br>
    <div class="input-group">
        <label class="form-label text-light">Stroke Opacity</label>
        <input id="line-opac-cont" onchange="actualizarPropiedades()" type="range" min="0" max="255" class="form-range">
    </div>
    <br>
</div>