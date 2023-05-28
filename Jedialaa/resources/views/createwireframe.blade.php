<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>

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

        canvas{
            cursor: crosshair;
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
        .btn-active{
            background-color: var(--purple-dark) !important;
        }

        .card {
            transition: 100ms all ease-in-out;
        }

        .card:hover {
            background-color: var(--purple-light);
            transition: 150ms all ease-in-out;
            transform: scale(103%);
        }

        .styled-select select {
            background: transparent;
            border: none;
            font-size: 14px;
            height: 29px;
            padding: 5px;
            /* If you add too much padding here, the options won't show in IE */
            width: 168px;
            font-family: Cambria;
        }

        .main,
            {
            background: #fff;
            width: 90%;
            /* min-height: 90vh; */
            margin: 20px auto;
        }

        .de {
            width: 20%;
            background: #b9c4ee;
            float: right;
            padding: 20px;
            box-sizing: border-box;
            min-height: 90vh;
        }

        .iz {
            width: 20%;
            background: #b9c4ee;
            float: left;
            padding: 20px;
            box-sizing: border-box;
            min-height: 90vh;
        }

        .li-active{
            background-color: var(--purple-main);
            color: white;
        }
        .li-active:hover{
            background-color: var(--purple-dark);
            color: white;
        }
    </style>
</head>

<body style="background-color: var(--purple-dark);">

    <nav class="navbar navbar-light" style="background-color: var(--purple-main);">
        <div class="container-fluid">
            <div>

                <button onclick="selectFigure('cursor',0) " id="fig0" class="btn btn-jedialaa btn-figura btn-active border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/cursor-w.png') }}" alt="Click and drag to draw a line" width="32" height="32">
                </button>

                <button onclick="selectFigure('linea',1) " id="fig1" class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/line-w.png') }}" alt="Click and drag to draw a line" width="32" height="32">
                </button>
                
                <button onclick="selectFigure('rect',2) " id="fig2" class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/square-w.png') }}" alt="Click and drag to draw a rectangle" width="32" height="32">
                </button>

                <button onclick="selectFigure('circ',3) " id="fig3" class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/circle-w.png') }}" alt="Click and drag to draw an ellipse" width="32" height="32">
                </button>

                <button onclick="selectFigure('text',4) " id="fig4" class="btn btn-jedialaa btn-figura border border-0 p-2" style="margin-left: 0px">
                    <img src="{{ asset('images/text-w.png') }}" alt="Click and start writing your text" width="32" height="32">
                </button>

            </div>
            <a class="navbar.tittle" href="/home">
                <h5 class="text-center m-0 text-light" style="font-family: Cambria; ">JEDIALAA</h5>
            </a>
            <form action="{{ url('/logout') }}" method="POST">
                @csrf
                <h5 class="m-0 text-light">
                    {{ Auth::User()->name }}
                    <button class="btn btn-jedialaa border border-0 p-2" style="margin-left: 20px;">
                        <img src="{{ asset('images/logout.png') }}" alt="Log out" width="32" height="32">
                    </button>
            </form>
            </h5>
        </div>
    </nav>

    <div class="row m-0">
        <div class="col-2" style="background-color:gray">
            <h4 class="text-light">Layers</h4>
            @for ($i = 0; $i < 10; $i++)
            
            <div class="row m-0 mb-2" style="height:35px">
                <div class="col-8 p-0">
                    <button type="button" class="btn btn-light btn-capas w-100 h-100 p-1 text-start"> Nombre </button>
                </div>
                <div class="col-2 p-0">
                    <button type="button" class="btn btn-light btn-capas w-100 h-100 p-0">
                        <img src="{{ asset('images/arrow-up.png') }}" alt="Click and drag to draw a rectangle" width="20" height="20">
                    </button>
                </div>
                <div class="col-2 p-0">
                    <button type="button" class="btn btn-light btn-capas w-100 h-100 p-0">
                        <img src="{{ asset('images/arrow-down.png') }}" alt="Click and drag to draw a rectangle" width="20" height="20">
                    </button>
                </div>
            </div>
            @endfor

        </div>
        <div id="canvasparent" class="col-8 p-0" style="min-height:300px">
            
        </div>
        <div class="col-2" style="background-color:lightgray">
            <h3>Properties</h3>
        </div>
    </div>

    {{-- <section class="main">
        <aside class="de">
            <h3>Properties</h3>
            <p>Lorep Ipsum</p>
        </aside>
        <aside class="iz">
            <h3>Layers</h3>
            <p>Help mee</p>
        </aside>
    </section> --}}

    <script src="{{ asset('js/misc.js') }}"></script>
    <script src="{{ asset('js/painter.js') }}"></script>

</body>

</html>
