<?php 
    require 'php/db.php';

    if($_POST){
        $user = $database->select("tb_users","*",[
            "user_name" => $_POST["username"]
        ]);

        if(count($user) > 0){
            if(password_verify($_POST["password"], $user[0]["password"])){
                //echo "valid username and password";

                //init session:
                session_start();
                $_SESSION["isLoggedIn"] = true;
                $_SESSION["username"] = $user[0]["user_name"];
                header("Location: recipe-list-admin.php");
            }else{
                echo "Wrong username or password";
            }
        }else{
            echo "Wrong username or password";
        }
    
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- BS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        onerror="this.onerror=null;this.href='./css/vendors/bootstrap.min.css';">

    <link rel="stylesheet" href="./css/main.css">

</head>

<body class="admin-background">
    <!-- LOGIN -->
    <div class="container center mt-1">
        <div class="row">
            <img src="imgs/icons/Color=White.svg" class="size-img" alt="logo">
        </div>
    </div>
    <div class="row container center mt-1 col-md-12 margin-box box-width">
        <div class="row box-login col-md-12 center ">

            <form action="login.php" method="post">
                <label class="form-label text-forms" for="username">User</label>
                <input id="username" class="form-control" type="text" name="username">
                <label for="password" class="form-label mt-4 text-forms">Password <span class="text-question"><a href=""
                            class="text-question"> Forgot?</a></span></label>
                <input name="password" type="password" class="form-control color-input">
                <div class="col center-button">
                    <div class="row center">
                        <input class="center btn-orange-dark btn-long-dark mt-4 hover-grow" type="submit"
                            value="Log in">
                    </div>
                    <div class="">
                        <span class=" line-deco mt-4 mb-3 mx-auto"></span>
                    </div>
            </form>
        </div>
    </div>
    <!--footer-->
    <footer class="container-fluid footer-position-end footer-color mt-5">
        <div class="d-flex justify-content-between ps-5 pe-5 gap-5">
            <p class="mt-4 pt-2">@2022 TheKitchen. All rights reserved.</p>
            <img src="./imgs/icons/Color=White.svg" class="size-img-sm img-fluid mt-4" alt="logo">
        </div>
    </footer>
</body>

</html>