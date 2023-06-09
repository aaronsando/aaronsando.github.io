<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JEDIALAA</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body>

  <!-- Inicia Formulario -->
  <section class="vh-100" style="background-color: #7A8ED8;">

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif


    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10 col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="{{ asset('images/LogIn.jpg') }}" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem; align-items: center;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">




                  <form action="{{ url('login/') }}" method="post">
                    @csrf

                    <div class="d-flex align-items-center mb-3 pb-1">
                      <span class="h1 fw-bold mb-0" style="color: #7A8ED8; font-family: Cambria;">Log In Jedialaa</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px; font-family: Cambria;">Please enter your email and password</h5>

                    <div class="form-outline mb-4">
                      <label class="form-label" style="font-family: Cambria;">Email address</label>
                      <input type="email" name="email" id="form2Example17" class="form-control form-control-lg" placeholder="example@email.com" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" style="font-family: Cambria;">Password</label>
                      <input type="password" name="password" id="form2Example27" class="form-control form-control-lg" placeholder="**********" />
                    </div>
                    

                    <div class="pt-1 mb-4" style="text-align: center;">
                      <button class="btn btn-light" type="submit">Accept</button>
                      <button class="btn btn-light" type="button">Clear</button>

                    </div>

                    <p class="mb-5 pb-lg-2" style="color: #393f81; text-align: center; font-family: Cambria;">Don't have an account? <a href="/register" style="color: #393f81;">Register here</a></p>

                  </form>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- termina Formulario -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>

</html>