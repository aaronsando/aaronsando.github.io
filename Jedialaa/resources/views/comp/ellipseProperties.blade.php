<div id="ellipse-properties" class="properties-panel" style="display:none">
    {{-- <h1>ELLIPSE</h1> --}}
    <div class="input-group">
        <span class="input-group-text">X</span>
        <input id="ellipse-x" onchange="actualizarPropiedades()" type="text" aria-label="X" class="form-control">
        <span class="input-group-text">Y</span>
        <input id="ellipse-y" onchange="actualizarPropiedades()" type="text" aria-label="Y" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">W</span>
        <input id="ellipse-ancho" onchange="actualizarPropiedades()" type="text" aria-label="W" class="form-control">
        <span class="input-group-text">H</span>
        <input id="ellipse-alto" onchange="actualizarPropiedades()" type="text" aria-label="H" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">Fill</span>
        <input id="ellipse-color-relleno" onchange="actualizarPropiedades()" type="color" class="form-control form-control-color">
    </div>
    <br>
    <div class="input-group">
        <label class="form-label text-light">Fill Opacity</label>
        <input id="ellipse-opac-rell" onchange="actualizarPropiedades()" type="range" min="0" max="255" class="form-range">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">Border</span>
        <input id="ellipse-color-contorno" onchange="actualizarPropiedades()" type="color" class="form-control form-control-color">
        <input id="ellipse-grosor-contorno" onchange="actualizarPropiedades()" type="text" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <label class="form-label text-light">Border Opacity</label>
        <input id="ellipse-opac-cont" onchange="actualizarPropiedades()" type="range" min="0" max="255" class="form-range">
    </div>
    <br>
</div>