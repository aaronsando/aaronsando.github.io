<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
    </script>

    <style>
        :root{
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
    </style>
</head>

<body style="background-color: var(--purple-dark);">

    <nav class="navbar navbar-light" style="background-color: var(--purple-main);">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="{{ asset('images/logo.png') }}" alt="" width="40" height="40">
            </a>
            <h5 class="text-center m-0 text-light" style="font-family: Cambria;">JEDIALAA</h5>
            <form action="{{ url('/logout') }}" method="POST">
                <h5 class="m-0 text-light">
                    {{ Auth::User()->name }}
                    @csrf
                    <button class="btn btn-jedialaa border border-0 p-2" style="margin-left: 20px;">
                        <img src="{{ asset('images/logout.png') }}" alt="Log out" width="32" height="32">
                    </button>
            </form>

            </h5>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-10">
                <h3 class="text-light">
                    Your files
                </h3>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-end">
                <button class="btn btn-jedialaa pb-2" data-bs-toggle="modal" data-bs-target="#modalNewProject">Create new
                    project</button>
            </div>
        </div>
        <div class="row">

            @foreach($user->projects as $project)
                <div class="col-3 mt-4">
                    <a href="#" class=" text-decoration-none">
                        <div class="card" style="height:10rem;">
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <h4 class="card-title m-0 text-dark overflow-hidden">{{ $project->name }}</h4>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach

        </div>
    </div>





    <!-- Modal -->
    <div class="modal fade" id="modalNewProject" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newProjectLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="newProjectLabel">Create new project</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="clearInputs()"></button>
                </div>

                <form action="/home" method="POST">
                    @csrf
                    <input type="hidden" name="user_id" value="{{ Auth::User()->id }}">
                    <div class="modal-body">
                        <div class="">
                          <label for="projname" class="form-label">Project name</label>
                          <input type="text" name="name" id="projname" class="form-control" autocomplete="off" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="clearInputs()">Close</button>
                        <button type="submit" class="btn btn-jedialaa">Create</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <script>
        function clearInputs() {
            document.getElementById('projname').value = '';
        }
    </script>
</body>

</html>
