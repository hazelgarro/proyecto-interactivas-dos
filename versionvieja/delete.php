<?php

require 'php/db.php';
if (isset($_GET)) {
    $data = $database->select("tb_recipes", "*", [
        "id_recipe" => $_GET["id"]
    ]);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

    <title>Delete recipe</title>
</head>

<body>

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
                  
                </ul>
                <div class="me-5 box-navbar">
                    <form class="d-flex input-group" action="search.php" method="get" role="search">
                        <input class="form-control me-2 search-recipe input-search" type="search" name="keyword"
                            placeholder="Search something..." aria-label="Search">
                        <button class="btn btn-search" type="submit"><img src="./imgs/icons/search.svg"
                                alt="search icon"></button>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    <h2>Delete this recipe:
        <?php echo $data[0]["recipe_name"]; ?>
    </h2>
    <form action="remove.php" method="post">
        <div class="d-flex me-3 mt-5 g-5">
            <input class="btn-admin-orange me-2 hover-grow ms-5 mt-5" type="submit" value="Yes">
            <input class="btn-admin-red me-5 hover-grow ms-5 mt-5" type="button" value="Cancel" onclick="history.back();">
            <input type="hidden" name="id" value="<?php echo $data[0]["id_recipe"]; ?>">
        </div>
    </form>

    <!--footer-->
    <footer class="container-fluid footer-color mt-5 ">
        <div class="d-flex justify-content-between ps-5 pe-5 gap-5">
            <p class="mt-4 pt-2">@2022 TheKitchen. All rights reserved.</p>
            <img src="./imgs/icons/Color=White.svg" class="size-img-sm img-fluid mt-4" alt="logo">
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
</body>

</html>