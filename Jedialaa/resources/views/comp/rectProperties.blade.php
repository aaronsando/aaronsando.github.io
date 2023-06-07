<div id="rect-properties" class="properties-panel" style="display:none">
    {{-- <h1>RECTANGULO</h1> --}}
    <div class="input-group">
        <span class="input-group-text">X</span>
        <input id="rect-x" onchange="actualizarPropiedades()" type="text" aria-label="X" class="form-control">
        <span class="input-group-text">Y</span>
        <input id="rect-y" onchange="actualizarPropiedades()" type="text" aria-label="Y" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">W</span>
        <input id="rect-ancho" onchange="actualizarPropiedades()" type="text" aria-label="W" class="form-control">
        <span class="input-group-text">H</span>
        <input id="rect-alto" onchange="actualizarPropiedades()" type="text" aria-label="H" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">Fill</span>
        <input id="rect-color-relleno" onchange="actualizarPropiedades()" type="color" class="form-control form-control-color">
    </div>
    <br>
    <div class="input-group">
        <label class="form-label text-light">Fill Opacity</label>
        <input id="rect-opac-rell" onchange="actualizarPropiedades()" type="range" min="0" max="255" class="form-range">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">Border</span>
        <input id="rect-color-contorno" onchange="actualizarPropiedades()" type="color" class="form-control form-control-color">
        <input id="rect-grosor-contorno" onchange="actualizarPropiedades()" type="text" class="form-control">
    </div>
    <br>
    <div class="input-group">
        <label class="form-label text-light">Border Opacity</label>
        <input id="rect-opac-cont" onchange="actualizarPropiedades()" type="range" min="0" max="255" class="form-range">
    </div>
    <br>
    <div class="input-group">
        <span class="input-group-text">Corner Radius</span>
        <input id="rect-radio" onchange="actualizarPropiedades()" type="text" class="form-control">
    </div>
    <br>
</div>