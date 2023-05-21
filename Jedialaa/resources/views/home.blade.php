<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .navbar {
            background-color: #7A8ED8;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
        }

        .logo img {
            height: 60px;
            /* Ajusta la altura de la imagen según tus necesidades */
            margin-left: 10px;
        }

        .title {
            text-align: center;
            color: white;
        }

        .icon-button{
          background-color: transparent;
          border: none;
          border-radius: 10%;
        }
        .icon-button:hover{
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
        }
        .profile-button-img {
            width: 50px;
        }

        .btn-primary{
            color: white;
            font-weight: bold;
            font-size: 18px;
            background-color:#7A8ED8;
            border: none;
            border-radius: 10%;
            padding: 10px;
        }
        .btn-primary:hover{
            background-color:#a9b7eb;
            cursor: pointer;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 20px;
            justify-items: center;
            padding: 20px;
        }

        .card {
            border: 1px solid #ccc;
            background-color: rgb(232, 232, 232);
            border-radius: 10px;
            padding: 80px;
            text-align: center;
        }
        .card:hover{
          cursor: pointer;
        }
    </style>


{{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> --}}
</head>

<body style="background-color: white;">
    <div class="navbar">
        <a href="#" class="logo">
            <img src="{{ 'images/Logo.png' }}" alt="Logo">
        </a>
        <h1 class="title">JEDIALAA</h1>

        <form action="{{ url('/logout') }}" method="POST">
          @csrf
          <button type="submit" class="icon-button">
              <img class="profile-button-img" src="{{ asset('images/user.png') }}" alt="" srcset="">
          </button>
        </form>

        
        {{-- <input class="profile-button" type="image" src="{{ asset('images/user.png') }}" >    --}}
    </div>

    <h3 style="text-align: left; padding-left: 8%; padding-top: 2% ; font-family: Cambria;">Welcome,
        {{ Auth::User()->name }} </h3>

    <div style="display: block; text-align: end; padding-right:20px;">
        <button class="btn-primary">+ New</button>
    </div>

    <h2 style="text-align: left; padding-left: 8%; padding-top: 5px ; font-family: Cambria; display: inline;">Your files: </h2>


    <div class="card-grid">
        @for ($i = 0; $i < 18; $i++)
            <div class="card">Proyecto {{ $i + 1 }}</div>
        @endfor
    </div>
</body>

</html>
