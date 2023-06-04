<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project workspace</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"></script>

    <style>
        :root {
            --purple-light: #cfdaff;
            --purple-main: #94a8f3;
            --purple-dark: #7a8ed8;
            --purple-darker: #6776af;
        }

        canvas {
            cursor: crosshair;
        }

        .btn:focus {
            outline: 0 !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }

        .btn-jedialaa {
            background-color: var(--purple-main);
            color: white;
            /* border: 1px solid #525f92; */
        }

        .btn-jedialaa:hover {
            background-color: var(--purple-darker);
            color: white;
        }

        .btn-active {
            background-color: var(--purple-dark) !important;
        }

        .btn-capa-active {
            background-color: var(--purple-dark);
            color: white;
            border: none;
        }

        .btn-capa-active:hover {
            background-color: var(--purple-darker);
            color: white;
        }
    </style>
</head>

<body style="background-color: var(--purple-dark);">
    
    {{-- <p>{{ $proj->figureArray }}</p> --}}
    
    <nav class="navbar navbar-light" style="background-color: var(--purple-main);">
        <div class="container-fluid">
            <div>

                <button onclick="selecBotonFigura('cursor', 0) " id="fig0"
                    class="btn btn-jedialaa btn-figura btn-active border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/cursor-w.png') }}" alt="Select mode" width="32" height="32">
                </button>

                <button onclick="selecBotonFigura('linea', 1) " id="fig1"
                    class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/line-w.png') }}" alt="Line" width="32" height="32">
                </button>

                <button onclick="selecBotonFigura('rect', 2) " id="fig2"
                    class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/square-w.png') }}" alt="Rectangle" width="32" height="32">
                </button>

                <button onclick="selecBotonFigura('circ', 3) " id="fig3"
                    class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/circle-w.png') }}" alt="Ellipse" width="32" height="32">
                </button>

                <button onclick="selecBotonFigura('text', 4) " id="fig4"
                    class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/text-w.png') }}" alt="Text" width="32" height="32">
                </button>

            </div>
            <a class="navbar.tittle" href="/home">
                <h5 class="text-center m-0 text-light" style="font-family: Cambria; ">JEDIALAA</h5>
            </a>



            <form action="{{ url('/project/'.$proj->id) }}" method="POST">
                @csrf
                @method('put')
                <input type="hidden" name="id" value="{{ $proj->id }}">
                <input type="hidden" name="figureArray" id="txtFigureArray">
                <h5 class="m-0 text-light">
                    {{ $proj->name }}
                    <button class="btn btn-jedialaa border border-0 p-2" style="margin-left: 20px;">
                        <img src="{{ asset('images/save-w.png') }}" alt="Save" width="32" height="32">
                    </button>
            </form>
            </h5>
        </div>
    </nav>

    <div class="row m-0">
        <div id="listaCapas" class="col-2" style="background-color:gray">
            <h4 class="text-light mt-2 mb-3" style="text-align:center">Layers</h4>
        </div>
        <div id="canvasparent" class="col-8 p-0" style="min-height:300px">

        </div>
        <div id="listaCapas" class="col-2" style="background-color:gray">
            <h4 class="text-light mt-2 mb-3" style="text-align:center">Properties</h4>
            <div>
                <div class="input-group">
                    <span class="input-group-text">X</span>
                    <input type="text" aria-label="X" class="form-control">
                    <span class="input-group-text">Y</span>
                    <input type="text" aria-label="Y" class="form-control">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-text">W</span>
                    <input type="text" aria-label="W" class="form-control">
                    <span class="input-group-text">H</span>
                    <input type="text" aria-label="H" class="form-control">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-text">Fill</span>
                    <input type="color" class="form-control form-control-color">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-text">Border</span>
                    <input type="color" class="form-control form-control-color">
                    <input type="text" class="form-control" placeholder="0px">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-text">Radius-corner</span>
                    <input type="text" class="form-control" placeholder="0px">
                </div>
                <br>
                <div class="input-group">
                    <label class="form-label">Fill Opacity</label>
                    <input type="range" class="form-range">
                </div>
                <br>
                <div class="input-group">
                    <label class="form-label">Border Opacity</label>
                    <input type="range" class="form-range">
                </div>
            </div>
        </div>
    </div>
    </div>
    <script>

        // var arreglo = '[{"x":73,"y":79,"ancho":146,"alto":180,"grosor":2,"tipo":"rect"},{"x":170,"y":187,"ancho":180,"alto":186,"grosor":2,"tipo":"rect"}]';

        @if(isset($proj->figureArray))
            var arreglo = JSON.parse('{{ $proj->figureArray }}'.replaceAll("&quot;", "\""));
        @else
            var arreglo = []
        @endif
        
        var arrow_up_img = "{{ asset('images/arrow-up.png') }}"
        var arrow_down_img = "{{ asset('images/arrow-down.png') }}"
    </script>

    <script src="{{ asset('js/misc.js') }}"></script>
    <script src="{{ asset('js/painter.js') }}"></script>


</body>

</html>
