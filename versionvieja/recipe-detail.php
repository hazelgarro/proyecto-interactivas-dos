<?php
    require 'php/db.php';

    $categories= $database->select("tb_recipe_category","*");
    $levels= $database->select("tb_recipe_levels","*");

    $recipe = $database->select("tb_recipes",[
        "[><]tb_recipe_category"=>["id_recipe_category" => "id_recipe_category"],
        "[><]tb_recipe_levels"=>["id_recipe_level" => "id_recipe_level"],
        "[><]tb_recipe_ocassions"=>["id_recipe_ocassion" => "id_recipe_ocassion"],
    ],[
        "tb_recipes.id_recipe",
        "tb_recipes.id_recipe_category",
        "tb_recipes.id_recipe_ocassion",
        "tb_recipes.recipe_name",
        "tb_recipes.recipe_total_time",
        "tb_recipes.recipe_cooking_time",
        "tb_recipes.recipe_preparation_time",
        "tb_recipes.recipe_yields",
        "tb_recipes.recipe_image",
        "tb_recipes.recipe_tag",
        "tb_recipes.recipe_description",
        "tb_recipes.recipe_likes",
        "tb_recipes.recipe_ingredients",
        "tb_recipes.recipe_preparation",
        "tb_recipe_category.recipe_category",
        "tb_recipe_ocassions.recipe_ocassion",
        "tb_recipes.id_recipe_level",
        "tb_recipe_levels.recipe_level"
    ],[
        "tb_recipes.id_recipe" => $_GET["id_recipe"]
    ]);

    $related_recipes = $database->select("tb_recipes", "*", [
        "id_recipe_category" => $recipe[0]["id_recipe_category"],
        "id_recipe_category" => $recipe[0]["id_recipe_category"],
        'LIMIT' => 10
    ]);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Detail</title>
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- BS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        onerror="this.onerror=null;this.href='./css/vendors/bootstrap.min.css';">
    <!-- BOXICONS -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> <!-- AOS animation -->
    <link rel="stylesheet" href="./css/main.css">
</head>

<body class="body-bg">

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
                <ul class="navbar-nav gap-5 box-navbar">
                    <li class=" position-relative"><a class="header-link" href="index.php">Home</a></li>
                    <li class=" position-relative"><a class="header-link " href="top10.php">Top Recipes</a></li>
                    <li class=" position-relative"><a class="header-link " href="categories.php">Categories</a></li>
                </ul>
                <div class="me-5 box-navbar">
                    <form class="d-flex input-group" action="search.php" method="get" role="search">
                        <input class="form-control me-2 search-recipe input-search" type="search" name="keyword" placeholder="Search something..."
                            aria-label="Search">
                        <button class="btn btn-search" type="submit"><img src="./imgs/icons/search.svg"
                            alt="search icon"></button>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    <div class="row  center mt-5 col-12 margin-box">
        <div class="center-img-detail col-md-4 col-lg-6">
            <div class="card text-bg-dark  max-box-size">
            <?php

                    $link_photo = $recipe[0]['recipe_image'];   //almacena ruta de imagen  
                    $show_path_photo = ""; //ruta a mostrar
                    if (!is_array(@getimagesize($link_photo))) //evalua si la ruta inicial es una imagen o no 
                    $show_path_photo ="./imagenes/".$recipe[0]['recipe_image']; //si no lo es buysca en la libreria
                    else
                    {
                    $show_path_photo = $link_photo;//si lo es utiliza el link 
                    }

                echo'
                        <img src="'.$show_path_photo.'"  alt="photo food">
                        <div class="card-img-overlay">
                            <div>
                                    <p class="align-content-center"><span class="badge-orange-big ">'.$recipe[0]['recipe_tag'].'</span></p>
                            </div>
                            <div class="align-end">
                            <button class="btn-circular mt-3 mb-3 hover-grow"><a type="button" href="php/likes.php?id_recipe='.$recipe[0]["id_recipe"].'><span class="img-fluid mx-auto mb-2" alt="favorite icon"><img src="./imgs/icons/favorite.svg"></span>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">'.$recipe[0]["recipe_likes"].'
                            </span></a></button>
                            </div>
                            <!-- <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p> -->
                        </div>
                    </div>
                    <div class="">
                        <h1 class="mt-4">'.$recipe[0]['recipe_name'].'</h1>
                        <!--  <p class="text-orange"><img src="./imgs/icons/star_rate.svg" alt="">200</p>-->
                    </div>
                    <div>
                        <span class="badge badge-orange">'.$recipe[0]['recipe_category'].'</span>
                        <span class="badge badge-green">'.$recipe[0]['recipe_level'].'</span>
                        <span class="badge badge-orange">'.$recipe[0]['recipe_ocassion'].'</span>
                    </div>
                    <!-- <div>
                        <p><img src="./imgs/icons/Like Button.svg" alt=""></p>
                        <p><img src="./imgs/icons/Like Button(1).svg" alt=""></p>
                    </div>-->
                    <div>
                        <h2 class="mt-4">Description</h2>
                        <div class="row">
                            <p class="label-time ms-3"><img src="imgs/icons/wash.svg" alt="preparation time icon">'.$recipe[0]['recipe_preparation_time'].'</p>
                            <p class="label-time ms-3"><img src="imgs/icons/local_fire_department.svg" alt="cooking time icon">'.$recipe[0]['recipe_cooking_time'].'</p>
                            <p class="label-time ms-3"><img src="imgs/icons/nest_clock_farsight_analog-orange.svg" alt="total time icon">'.$recipe[0]['recipe_total_time'].'</p>
                            <p class="label-time ms-3"><img src="imgs/icons/pie_chart_orange.svg" alt="portions icon">'.$recipe[0]['recipe_yields'].'</p>
                        </div>
                        <p>'.$recipe[0]['recipe_description'].'</p>
                        <h2 class="mt-2">Ingredients</h2>
                        <ul>';
                            $ingredientes=explode(",",$recipe[0]['recipe_ingredients']);
                            
                            foreach ($ingredientes as $ingrediente) {
                                if(strlen ($ingrediente)>2){
                                    echo '<li>'.$ingrediente.'</li>';
                                }
                            }
                        echo '
                        </ul>
                        <h2 class="mt-2">Preparation</h2>
                        <p>'.$recipe[0]['recipe_preparation'].'</p>
                    </div>
                </div>';
            ?>

        <div class="col-lg-5 center-img-detail" data-aos="fade-left">
            <div class="row">
                <h2>Related Recipes</h2>
            </div>
        <?php 
         echo '<div class="row center mt-3 recipe-display margin-cards margin-cards-block">';
         $numRecipe=0;
            foreach ($related_recipes as $recipe_rel){
                $numRecipe++;
                $link_photo = $recipe_rel['recipe_image'];   //almacena ruta de imagen  
                    $show_path_photo = ""; //ruta a mostrar
                    if (!is_array(@getimagesize($link_photo))) //evalua si la ruta inicial es una imagen o no 
                    $show_path_photo ="./imagenes/".$recipe_rel['recipe_image']; //si no lo es buysca en la libreria
                    else
                    {
                    $show_path_photo = $link_photo;//si lo es utiliza el link 
                    }

                    if($recipe_rel['id_recipe'] != $recipe[0]["id_recipe"] && $numRecipe<8){//para que no imprima la receta del detalle, y solo imprima 6 relacionadas
                        echo '
                            <div class="col-12 col-lg-6 margin-cards mb-4">
                                <div class="card" style="min-width:232px ;">
                                    <img src="'.$show_path_photo.'" class="card-img-top img-fluid size-img-md" alt="photo food">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between">
                                        <a href="recipe-detail.php?id_recipe='.$recipe_rel["id_recipe"].'" style="text-decoration:none">
                                            <h5 class="mt-2 overflow-title text-title-recipe">'.$recipe_rel['recipe_name'].'</h5></a>';

                                            if($levels)//para imprimir el level de las recetas relacionadas
                                                {
                                                    foreach($levels as $level)
                                                    { 
                                                        if ($recipe_rel['id_recipe_level'] == $level['id_recipe_level']) {
                                                            echo'<h6><span class="badge badge-green mt-2">'.$level['recipe_level'].'</span></h6>';
                                                        }
                                                    }
                                                }
                                            echo '
                                           
                                        </div>
                                        <p class="card-text overflow recipe-description-space">'.$recipe_rel['recipe_description'].'</p>
                                    </div>
                                    <div class="d-flex justify-content-between gap-1">
                                        <h6 class="mt-2 opacity-50 ms-3"><small>'.$recipe_rel['recipe_total_time'].'</small></h6>
                                        
                                        <button class="btn-circular mt-3 mb-3 hover-grow me-3"><a type="button" href="php/likes.php?id_recipe='.$recipe_rel["id_recipe"].'><span class="img-fluid mx-auto mb-2" alt="favorite icon"><img src="./imgs/icons/favorite.svg"></span>
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">'.$recipe_rel["recipe_likes"].'
                                        </span></a></button>

                                    </div>
                                </div>
                            
                        </div>';
                    }
            }
            echo '</div>';
        ?>
        </div>
    </div>
    

    <!--footer-->
    <footer class="container-fluid footer-color mt-5">
        <div class="d-flex justify-content-between ps-5 pe-5 gap-5">
            <p class="mt-4 pt-2">@2022 TheKitchen. All rights reserved.</p>
            <img src="./imgs/icons/Color=White.svg" class="size-img-sm img-fluid mt-4" alt="logo">
        </div>
    </footer>

</body>
<!-- JavaScript Bundle with Popper -->
<!-- AOS animation -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>

</html>