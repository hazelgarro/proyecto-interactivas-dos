<?php
    require 'php/db.php';

    $data= $database->select("tb_recipes","*" ,"FETCH FIRST 10 ROWS ONLY");
    $categories= $database->select("tb_recipe_category","*");
    $level= $database->select("tb_recipe_levels","*");
    $ocassion = $database->select("tb_recipe_ocassions", "*");

    //top 10
    $popular_recipes = $database->select("tb_recipes","*",[
        "ORDER" => [
            "recipe_likes" => "DESC"
        ],
        'LIMIT' => 10
    ]);

    $tag = 1;
  
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 10</title>
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

<body class="banner-background">

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
    <!--Communityu top-->
    <section class="container">
        <div class="row">
            <div class="col-lg-5  col-md-12">
                <h1 class="mt-5">Community Top</h1>
                <p class="mt-3">Do you want food recipes to cook delicious homemade dishes and desserts for all occasions? In that case, welcome to recipe heaven. You have just entered a portal where, after many years of accumulating experience on the Internet, we have managed to ensure that you are always able to make your own homemade food recipes, while giving free rein to the noble and addictive art of cook. Therefore, even if you have come to us looking for a specific cooking recipe, you will surely discover dozens of interesting ideas for your daily menu and for your lunches, snacks and dinners with friends, if you decide to stay and browse  </p>
                <h2 class="mt-4">Top 10 Recipes</h2>
            </div>
            <div class="col-3 ocultar">
                <p><img src="./imgs/Maskgroup.png" alt="photo food"></p>
            </div>
        </div>
        <!--top 10-->
        <div class="justify-container" data-aos="fade-up" data-aos-duration="3000">
            <div class="row">

            <?php 
            if($popular_recipes) {
                $i = 0;
              foreach($popular_recipes as $row) {
                    $i = $i + 1;
                if ($i < 11) {
                echo '
                <div class="col-lg-6 mb-4">
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="rounded-start top-recipes">'.$tag++.'</div>
                                <img class="size-img-big img-fluid" src="imagenes/'.$row['recipe_image'].'"
                                    alt="photo food" height="362" width="266">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body padding-0">
                                    <div class="row">
                                        <div class="col-6">
                                        <a href="recipe-detail.php?id_recipe='.$row["id_recipe"].'" style="text-decoration:none">
                                            <h5 class="card-title ms-3 overflow text-title-recipe">'.$row['recipe_name'].'</h5></a>
                                        </div>';
                        if ($categories) {
                            foreach ($categories as $cat) {
                                if ($row['id_recipe_category'] == $cat['id_recipe_category']) {

                                    if ($level) {
                                        foreach ($level as $lev) {
                                            if ($row['id_recipe_level'] == $lev['id_recipe_level']) {

                                                if ($ocassion) {
                                                    foreach ($ocassion as $event) {
                                                        if ($row['id_recipe_ocassion'] == $event['id_recipe_ocassion']) {

                                                            echo '
                                                                                <div class="col-6">
                                                                                    <span class="badge badge-orange">' . $cat['recipe_category'] . '</span>
                                                                                    <span class="badge badge-green">' . $lev['recipe_level'] . '</span>
                                                                                    <span class="badge badge-orange">' . $event['recipe_ocassion'] . '</span>
                                                                                </div>';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                                            echo '</div>
                                                <p class="card-text overflow ms-3 recipe-description-space-top10">'.$row['recipe_description'].'</p>
                                                <div class="row ms-1 ms-3">
                                                    <p class="label-time"><img
                                                            src="imgs/icons/nest_clock_farsight_analog-orange.svg"
                                                            alt="preparation time icon">'.$row['recipe_total_time'].'</p>
                                                    <p class="label-time ms-3"><img src="imgs/icons/pie_chart_orange.svg"
                                                            alt="portions icon">'.$row['recipe_yields'].'</p>
                                                </div>
                                                <div class="row ms-2 mb-3">
                                                    <div class="col-10">
                                                        <p class="card-text mt-4"><small class="text-muted">'.$row['recipe_preparation_time'].'</small></p>
                                                    </div>
                                                    <div class="col-1 p-1">
                                                    <button class="btn-circular mt-3 mb-3 hover-grow"><a type="button" href="php/likes.php?id_recipe='.$row["id_recipe"].'><span class="img-fluid mx-auto mb-2" alt="favorite icon"><img src="./imgs/icons/favorite.svg"></span>
                                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">'.$row["recipe_likes"].'</span></a></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>';
                }
            }  

            }
        
        ?> 
            </div>
        </div>
    </section>
    <!--footer-->
    <footer class="container-fluid footer-color mt-5">
        <div class="d-flex justify-content-between ps-5 pe-5 gap-5">
            <p class="mt-4 pt-2">@2022 TheKitchen. All rights reserved.</p>
            <img src="./imgs/icons/Color=White.svg" class="size-img-sm img-fluid mt-4" alt="logo">
        </div>
    </footer>
</body>

<!-- AOS animation -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>

</html>