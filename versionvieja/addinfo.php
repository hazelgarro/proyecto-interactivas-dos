<?php
    require 'php/db.php';

    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    if(isset($_POST)){
        //var_dump($_POST);

        if(isset($_FILES["recipe_image"])){
            $errors = array();
            $file_name = $_FILES["recipe_image"]["name"];
            $file_size = $_FILES["recipe_image"]["size"];
            $file_tmp = $_FILES["recipe_image"]["tmp_name"];
            $file_type = $_FILES["recipe_image"]["type"];
            $file_ext_arr = explode(".", $_FILES["recipe_image"]["name"]);

            $file_ext = end($file_ext_arr);
            $img_ext = array("jpeg", "png", "jpg", "gif");

            if(!in_array($file_ext, $img_ext)){
                $errors[] = "File type is not supported";
            }

            if(empty($errors)){
                $img = "recipe-upload-".generateRandomString().".".$file_ext;
                move_uploaded_file($file_tmp, "imagenes/".$img);

                $database->INSERT("tb_recipes", [
                    "recipe_name" => $_POST["title"],
                    "id_recipe_category" => $_POST["category"],
                    "id_recipe_level" => $_POST["difficulty"],
                    "id_recipe_ocassion" => $_POST["ocassions"],
                    "recipe_tag" => $_POST["tag"],
                    "recipe_preparation_time" => $_POST["prep-time"],
                    "recipe_cooking_time" => $_POST["cooking"],
                    "recipe_total_time" => $_POST["total-time"],
                    "recipe_yields" => $_POST["portions"],
                    "recipe_description" => $_POST["description"],
                    "recipe_ingredients" => $_POST["ingredientes"],
                    "recipe_preparation" => $_POST["preparation"],
                    "recipe_image" => $img
                ]);
        
                header("location: recipe-list-admin.php");
            }


        }

    }
?>