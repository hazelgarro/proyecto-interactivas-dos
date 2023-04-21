<?php
require 'php/db.php';

session_start();
if (isset($_SESSION["isLoggedIn"])) {

    $data = $database->select("tb_recipes", [
        "[>]tb_recipe_category" => ["id_recipe_category" => "id_recipe_category"]
    ], [
            "tb_recipes.id_recipe",
            "tb_recipes.recipe_name",
            "tb_recipes.recipe_image"
        ]);
} else {
    header("Location: login.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Recipe List</title>

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

    <!--banner-->
    <div class="container row ms-5 me-5">
        <div class="col-6 me-5">
            <h1 class="mt-3">The Kitchen Recipes</h1>
        </div>
        <div class="col-4 ms-5">
            <p><img class="img-fluid" src="./imgs/banner-sm.png" alt="banner"></p>
        </div>
    </div>

      <!--buttons-->
    <p class="ms-5">User: <?php echo $_SESSION["username"]?></p>
    <p class="ms-5 btn-admin-red me-5 hover-grow"><a class="header-link" href="logout.php">Logout</a></p>

    <h4 class="ms-5 mt-5">All items</h4>
    <div class="ms-5 me-3 mt-4">
    <?php
    echo '<button class="btn-item-list hover-grow"><a class="header-link" href="recipe-add-admin.php">New recipe</a></button>';
    ?>
    </div>

    <!--feed Items-->
    <table class = "mt-5">
    <?php

    $len = count($data);
    for ($i = 0; $i < $len; $i++) {
        echo "<tr>";
        echo "<td>";
        echo'<img src="imagenes/'.$data[$i]["recipe_image"].'"class="size-img-list top-border-photo ms-5 mb-4 ps-4" alt="photo food">';
        echo "</td>";
        echo "<td>";
        echo '<h4 class=ms-4>' .$data[$i]["recipe_name"].'</h4>';
        echo'<h6 class="mt-3 opacity-50 ms-4"><small> Update 3min ago</small></h6>';
        echo "</td>";
        echo "<td>";
        echo' <button class="btn-item-list hover-grow"><a href="recipe-detail-admin.php?id_recipe='.$data[$i]["id_recipe"].'" class="header-link" >View detail</a></button>';
        echo "</td>";
        echo "</tr>";
    }
    ?>
    </table>
    <!--final card-->

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

</body>

</html>