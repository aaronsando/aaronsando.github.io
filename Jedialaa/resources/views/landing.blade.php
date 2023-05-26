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

    <!-- Section: Design Block -->
<section class="background-radial-gradient overflow-hidden" style="background-color: #7A8ED8; min-height: 100vh;">
    
  
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5;" >
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10; font-family: Cambria;">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%); ">
            JEDIALAA <br />
            <span style="color: hsl(0, 0%, 100%);">The best option to make your designs</span>
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(0, 0%, 100%); text-align: justify; ">
            Jedialaa is a new technological tool that has all the 
            necessary functions that will help you carry out all your 
            design projects in an easier, faster and simpler way. 
            It is currently being used by millions of designers around the world.
          </p>
          
        </div>
  
        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
  
          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">

                <div style="display: flex ; justify-content: center; align-items: center; ">
                    <img src="{{ asset ('images/Logo.png') }}" width="120" >
                    <h2 style="color: #7A8ED8; font-family: Cambria;">Join With Us</h2>
                </div>

                <br><br>
              <form>
                  <div style="text-align: center; font-family: Cambria;">

                    <h2 style="color: #7A8ED8;">Create the designs for your projects, easier, faster and simpler.</h2><br>
                    
                    <div style="display: grid;">
                        <a class="btn btn-outline-secondary btn-block mb-4" href="/login" role="button">Log In</a>
                        <p >OR</p>
                        <a class="btn btn-outline-secondary btn-block mb-4" href="/register" role="button">Sign Up</a>
                    </div>


                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>