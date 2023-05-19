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
      height: 60px; /* Ajusta la altura de la imagen según tus necesidades */
      margin-left: 10px;
    }
    
    .title {
      text-align: center;
      color: white;
    }
    
    .profile-button {
      margin-right: 10px;
      width: 50px;
    }
    
    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      justify-items: center;
      padding: 20px;
    }
    
    .card {
      border: 1px solid #ccc;
      background-color: rgb(232, 232, 232);
      border-radius: 5px;
      padding: 80px;
      text-align: center;
    }
  </style>


</head>
  <body style="background-color: white;">
    <div class="navbar">
      <a href="#" class="logo">
        <img src="{{ 'images/Logo.png' }}" alt="Logo">
      </a>
      <h1 class="title">JEDIALAA</h1>

      <form action="{{ url('/logout') }}" method="POST">
        @csrf
        <button type="submit">Cerrar sesión</button>
      </form>

      {{-- <input class="profile-button" type="image" src="{{ asset('images/user.png') }}" >    --}}
    </div>

    <h3 style="text-align: left; padding-left: 8%; padding-top: 2% ; font-family: Cambria; ">Bienvenido, {{ Auth::User()->name }} </h3>
    <h2 style="text-align: left; padding-left: 8%; padding-top: 2% ; font-family: Cambria; ">Your files: </h2>
    
    <div class="card-grid">
      @for ($i = 0; $i < 8; $i++)
      <div class="card">Proyecto {{ $i+1 }}</div>
      @endfor
    </div>
  </body>
</html>
