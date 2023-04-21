<?php
    require 'php/db.php';

    if($_GET){

        $results = $database->select("tb_recipes",[
            "[><]tb_recipe_category"=>["id_recipe_category" => "id_recipe_category"]
        ],[
            "tb_recipes.id_recipe",
            "tb_recipes.recipe_name",
            "tb_recipes.recipe_preparation_time",
            "tb_recipes.recipe_image",
            "tb_recipes.recipe_description",
            "tb_recipes.recipe_likes",
            "tb_recipe_category.recipe_category",
            "tb_recipes.id_recipe_level"
        ],[
            "tb_recipes.recipe_name[~]" => $_GET["keyword"]
        ]);
        
    }

    $levels = $database->select("tb_recipe_levels","*");
    $categories = $database->select("tb_recipe_category","*");

    //featured recipes
    $featured_recipes = $database->select("tb_recipes","*",[
        "recipe_is_featured" => 1
    ]);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Categories</title>

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

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> <!-- AOS animation -->

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

    
            <div class="row g-0 mt-5">
                <?php 

                    $keydord = $_GET["keyword"]; //variable para poder enviar el get a este documento, para hacer consultas aca tambien

                    if(count($results) > 0){
                        echo "<h4 class='text-center mt-3'>".count($results)." results for <span class='fw-bolder'>".$keydord."</span></h4>";
                    }else{
                        echo "<h4 class='text-center mt-3'>No results for <span class='fw-bolder'>".$keydord."</span></h4>";
                    }
                ?>
            </div>
            <section class="row center col-md-12 col-12 ms-0 me-0 box-bo">
    <?php 
    
        if($results)
            { echo '<section class="center d-flex row col-md-12 col-12">';
        foreach($results as $result)
            { 
                $link_photo = $result['recipe_image'];   //almacena ruta de imagen  
                $show_path_photo = ""; //ruta a mostrar
                if (!is_array(@getimagesize($link_photo))) //evalua si la ruta inicial es una imagen o no 
                $show_path_photo ="./imagenes/".$result['recipe_image']; //si no lo es buysca en la libreria
                else
                {
                $show_path_photo = $link_photo;//si lo es utiliza el link 
                }
              
                    echo '<div class="position-relative col-lg-2 col-md-12 box-recipe">

                                <img src=" '.$show_path_photo.'" class="img-fluid top-border-photo size-img-categories" alt="photo food">
                                <div class="text-start ms-2 me-2">
                                    <div class="d-flex justify-content-between">
                                    <a href="recipe-detail.php?id_recipe='.$result["id_recipe"].'" style="text-decoration:none">
                                        <h5 class="mt-2 overflow-title text-title-recipe">'.$result['recipe_name'].'</h5></a>';
                                        if($levels)
                                        {
                                            foreach($levels as $lev)
                                            { 
                                                if ($result['id_recipe_level'] == $lev['id_recipe_level']) {
                                                    echo '
                                        <h6><span class="badge badge-green mt-2">'.$lev['recipe_level'].'</span></h6>';
                                                }
                                            }
                                        }
                                    echo ' </div>
                                    <div>
                                        <p class="pt-2 overflow text-cards-categories recipe-description-space">'.$result['recipe_description'].'</p>
                                    </div>
                                    <div class="d-flex justify-content-between gap-1">
                                        <h6 class="mt-3 opacity-50"><small>'.$result['recipe_preparation_time'].'</small></h6>
                                        
                                        <button class="btn-circular mt-3 mb-3 hover-grow me-2"><a type="button" href="php/likes.php?id_recipe='.$result["id_recipe"].'><span class="img-fluid mx-auto mb-2" alt="favorite icon"><img src="./imgs/icons/favorite.svg"></span>
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">'.$result["recipe_likes"].'
                                        </span></a></button>
                                    </div>
                                </div>
                            
                            </div>';
                     }
                 }

                 if($results)
            { echo '</section>';}
                
                
        ?>
            <!--final card-->
    </section>
    
    <!--footer-->
    <footer class="container-fluid footer-color mt-5 ">
        <div class="d-flex justify-content-between ps-5 pe-5 gap-5">
            <p class="mt-4 pt-2">@2022 TheKitchen. All rights reserved.</p>
            <img src="./imgs/icons/Color=White.svg" class="size-img-sm img-fluid mt-4" alt="logo">
        </div>
    </footer>

    <!--Script-->
    <!-- AOS animation -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
        </script>

</body>

</html>