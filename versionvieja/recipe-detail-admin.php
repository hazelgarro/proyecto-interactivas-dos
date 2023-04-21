<?php
require 'php/db.php';

$data = $database->select("tb_recipes", "*");
$levels = $database->select("tb_recipe_levels", "*");
$categories = $database->select("tb_recipe_category", "*");
$idRec= $_GET["id_recipe"];

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
                <ul class="navbar-nav gap-5">
                </ul>
                <div class="me-5">
                    <form class="d-flex input-group" role="search">
                        <input class="form-control me-2 input-search" type="search" placeholder="Search something..."
                            aria-label="Search">
                        <button class="btn btn-search" type="submit"><img src="./imgs/icons/search.svg" alt=""></button>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    <!--recipe detail-->
    <?php
    if ($data) {

        foreach ($data as $row) {

            if ($row['id_recipe'] ==$idRec) {

                echo ' <table>
        <section class="d-flex  ms-5">
        <td>
        <div class="ms-5 p-0">
        <img class="size-img-detail" src="imagenes/' . $row['recipe_image'] . '"
        </div>
        </td>

        <td>
        <div class="col ms-4 mt-4 me-5">
            <h1>' . $row['recipe_name'] . '</h1>
            <div>
            <span class="badge badge-orange">'.$recipe[0]['recipe_category'].'</span>
            <span class="badge badge-green">'.$recipe[0]['recipe_level'].'</span>
            <span class="badge badge-orange">'.$recipe[0]['recipe_ocassion'].'</span>
            </div>
            <h2 class="mt-4">Description</h2>
            <div class="d-flex align-items-start">
                <p class="label-time"><img src="imgs/icons/wash.svg" alt="preparation time icon">' . $row['recipe_preparation_time'] . '</p>
                <p class="label-time ms-2"><img src="imgs/icons/local_fire_department.svg" alt="cooking time icon">' . $row['recipe_cooking_time'] . '</p>
                <p class="label-time ms-2"><img src="imgs/icons/nest_clock_farsight_analog-orange.svg" alt="total time icon">' . $row['recipe_total_time'] . '</p>
                <p class="label-time ms-2"><img src="imgs/icons/pie_chart_orange.svg" alt="portions time icon">' . $row['recipe_yields'] . '</p>
            </div>
            <p>' . $row['recipe_description'] . '</p>
            <h2 class="mt-4">Ingredients</h2>
            <p>' . $row['recipe_ingredients'] . '<p>
            <h2>Preparation</h2>
            <p>' . $row['recipe_ingredients'] . '</p>
        </div>
        </td>
       
    </section>
    </table>';
            }
        }
    }
    ?>

    <!--buttons-->
    <div class="d-flex flex-row-reverse me-3 mt-4">
  <?php echo '<button class="btn-admin-red me-5 hover-grow"><a class="header-link"
     href="delete.php?id='.$idRec.'"
     >Delete</a></button> 
        <button class="btn-admin-orange me-2 hover-grow"><a class="header-link" href="recipe-edit-admin.php?id='.$idRec.'">Edit</a></button>
   ';?>
        </div>

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