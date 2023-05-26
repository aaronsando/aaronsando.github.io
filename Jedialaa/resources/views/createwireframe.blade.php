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

        .btn-jedialaa {
            background-color: var(--purple-main);
            color: white;
            /* border: 1px solid #525f92; */
        }

        .btn-jedialaa:hover {
            background-color: var(--purple-darker);
            color: white;
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
    </style>
</head>

<body style="background-color: var(--purple-dark);">

    <nav class="navbar navbar-light" style="background-color: var(--purple-main);">
        <div class="container-fluid">
            <div class="styled-select">
                <select name="" id="">
                    <option value="">Select a option</option>
                    <option value="">Rect</option>
                    <option value="">Circle</option>
                    <option value="">Line</option>
                </select>
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

    <section class="main">
        <aside class="de">
            <h3>Properties</h3>
            <p>Lorep Ipsum</p>
        </aside>
        <aside class="iz">
            <h3>Layers</h3>
            <p>Help mee</p>
        </aside>
    </section>

    <script>
        var arreglo = []
        var mouseXInicial
        var mouseYInicial
        var mouseXFinal
        var mouseYFinal

        var canvasWidth = 1125;
        var canvasHeight = 850;

        var figuraSeleccionada = 'rect'

        function setup() {
            createCanvas(canvasWidth, canvasHeight);
        }

        function draw() {
            background(150);
            arreglo.forEach(figura => {
                if(figura.tipo == "rect"){
                    rect(figura.x, figura.y, figura.ancho, figura.alto)
                }
            });
        }

        function mousePressed(){
            mouseXInicial = mouseX
            mouseYInicial = mouseY
        }
        
        function mouseReleased(){
            mouseXFinal = mouseX
            mouseYFinal = mouseY 
            if(mouseXInicial < 0 || mouseXInicial > canvasWidth
            || mouseYInicial < 0 || mouseYInicial > canvasHeight
            || mouseXFinal < 0 || mouseXFinal > canvasWidth
            || mouseYFinal < 0 || mouseYFinal > canvasHeight){
                alert("Click afuera del canvas")
            }


            else{
                if(figuraSeleccionada=='rect'){
                    arreglo.push({
                        "x": mouseXInicial,
                        "y": mouseYInicial,
                        "ancho": mouseXFinal - mouseXInicial,
                        "alto": mouseYFinal - mouseYInicial,
                        "tipo": "rect"
                    })
                }
            }
        }
    </script>

</body>

</html>
