<?php
require 'php/db.php';

$categories = $database->select("tb_recipe_category", "*");
$difficulties = $database->select("tb_recipe_levels", "*");
$ocassions = $database->select("tb_recipe_ocassions", "*");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Recipe Add</title>

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!--bootstrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        onerror="this.onerror=null;this.href='./css/vendors/bootstrap.min.css';">
    <!--js bootstrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js">
    <!--css-->
    <link rel="stylesheet" href="./css/main.css">

</head>

<body class="banner-background">
    <!--header-->
    <header class="container-fluid navbar-color">
        <!-- nav menu -->
        <nav id="navbar-main" class="navbar navbar-expand-lg">
            <a class="navbar-brand color-header" href="#">
                <img src="./imgs/icons/Color=White.svg"
                    class="ms-5 size-img-sm img-fluid d-inline-block align-text-middle" alt="logo">
            </a>
            <!--boton navbar-main-->
            <button class="navbar-toggler " data-bs-target="#menu" data-bs-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-4 justify-content-between" id="menu">
                <ul class="navbar-nav gap-5 ">

                </ul>
                <div class="me-5">
                    <form class="d-flex input-group" role="search">
                        <input class="form-control me-2 input-search" type="search" placeholder="Search something..."
                            aria-label="Search">
                        <button class="btn btn-search" type="submit"><img src="./imgs/icons/search.svg"
                                alt="search icon"></button>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    <!--recipe edit form-->
    <section class="d-flex mt-4">
        <div class="col-4 ms-5">
        <!--start form col1-->
        <form action="addinfo.php" method="post" enctype="multipart/form-data">
            <label for="recipe_image">
                <h2>Imagen principal</h2>
            </label>
            <br>
            
          <?php 
          
          echo ' <img id="preview" src="imgs/PlaceholderSquare.png" width="125" height="125"
                class="img-fluid mt-5 size-img-detail" alt="Preview">';?>
            <br>
            <input class="mt-5 img-fluid" id="recipe_image" type="file" name="recipe_image" onchange="readURL(this)">

        </div>
       
        <div class="col ms-4 me-5">
            <h2>Recipe Basic Informations</h2>
            <!--start form col2-->
            <!--recipe title-->
            
                <label class="form-label" for="title">Recipe title</label>
                <input id="title" class="form-control" type="text" name="title">
                <!--recipe categories-->
                <div class="row mt-2">
                    <div class="col ">
                        <label class="form-label" for="category">Category</label>
                        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example" name="category">
                            <?php
                          $len = count($categories);
                          for ($i = 0; $i < $len; $i++) {
                                  echo '<option value="' . $categories[$i]['id_recipe_category'] . '">' . $categories[$i]['recipe_category'] . '</option>';
                          }
                            ?>
                        </select>
                    </div>
                    <!--recipe difficulties-->
                    <div class="col">
                        <label class="form-label" for="difficulty">Difficulty</label>
                        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example" name="difficulty"> 
                            <?php
                          $len = count($difficulties);
                          for ($i = 0; $i < $len; $i++) {
                                  echo '<option value="' . $difficulties[$i]['id_recipe_level'] . '">' . $difficulties[$i]['recipe_level'] . '</option>';
                          }
                            ?>
                        </select>
                    </div>
                    <!--recipe event-->
                    <div class="col">
                        <label class="form-label" for="event">Event</label>
                        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example"  name="ocassions">
                            <?php
                        
                        $len = count($ocassions);
                        for ($i = 0; $i < $len; $i++) {
                                echo '<option value="' . $ocassions[$i]['id_recipe_ocassion'] . '">' . $ocassions[$i]['recipe_ocassion'] . '</option>';
                        }
                            ?>
                        </select>
                    </div>
                </div>
                <!--recipe tag-->
                <div class="col-4 mt-2">
                    <label class="form-label" for="tag">Tag</label>
                    <input id="tag" class="form-control" type="text" name="tag">
                </div>

                <h2 class="mt-4">Description</h2>
                <!--recipe times-->
                <div class="row mt-2">
                    <div class="col">
                        <label class="form-label" for="prep-time">Preparation Time</label>
                        <input id="prep-time" class="form-control"  name="prep-time"
                           >

                           
                    </div>
                    <div class="col">
                        <label class="form-label" for="cooking">Cooking Time</label>
                        <input id="prep-time" class="form-control" name="cooking"
                           >
                    </div>
                    <div class="col">
                        <label class="form-label" for="total-time">Total Time</label>
                        <input id="total-time" class="form-control" name="total-time"
                           >
                    </div>
                    <!--recipe portions-->
                    <div class="col">
                        <label class="form-label" for="portions">Portions</label>
                        <input id="portions" class="form-control" type="number" name="portions"  >
                    </div>
                </div>
                <!--recipe description-->
                <label class="form-label mt-2" for="description">Description </label>
                 <textarea  id="description" class="form-control input-xl" name="description"  >
                
                 </textarea>
                <!--recipe ingredients-->
                <label class="form-label mt-2" for="Ingredientes">Ingredients </label>
                <div class="" id="ingredients">
                    <?php
                   echo '<textarea  id="ingredientes" class="form-control input-xl" name="ingredientes"  ></textarea>';
                    ?>
                </div>
               
                <br>
                <!--recipe preparation-->
                <label class="form-label mt-2" for="preparation">Preparation</label>
                <textarea id="preparation" class="form-control input-xl" type="text" name="preparation"  ></textarea>
        </div>
  
    </section>

    <!--buttons-->
    <div class="d-flex flex-row-reverse me-3 mt-4">
        <input class="btn-admin-red me-5 hover-grow" type="button" value="Discard" onclick="history.back();">
        <button class="btn-admin-orange me-2 hover-grow" type="submit"> Save</button>
    </div>
    </form>
    <!--footer-->
    <footer class="container-fluid footer-color mt-5 ">
        <div class="d-flex justify-content-between ps-5 pe-5 gap-5">
            <p class="mt-4 pt-2">@2022 TheKitchen. All rights reserved.</p>
            <img src="./imgs/icons/Color=White.svg" class="size-img-sm img-fluid mt-4" alt="logo">
        </div>
    </footer>

    <!--Script-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
        </script>

    <script>
        function click() {
            event.preventDefault();
        }

        function readURL(input) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();

                reader.onload = function (e) {
                    let preview = document.getElementById('preview').setAttribute('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        document.querySelector('#add-ingredient').addEventListener('click', function () {
            event.preventDefault();

            let ingredient = document.createElement("div");
            let id = "ingredient-" + Date.now();
            ingredient.id = id;
            document.querySelector('#ingredients').appendChild(ingredient);

            let input = document.createElement("input");
            input.type = "text";
            input.classList.add("form-control");
            input.setAttribute('name', 'ingredients[]');
            document.querySelector('#' + id).appendChild(input);


            let btn = document.createElement("button");
            btn.innerText = "Remove";
            btn.classList.add('btn-admin-red');
            btn.addEventListener('click', function () {
                document.querySelector('#' + id).remove();
            });
            document.querySelector('#' + id).appendChild(btn);


        });
    </script>
</body>

</html>