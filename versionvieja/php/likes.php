<?php
   
    require 'db.php';

    if(isset($_GET)){
        
        $data = $database->select("tb_recipes", "*", [
            "id_recipe" => $_GET["id_recipe"]
        ]);

        //echo "LIKES -> ".$data[0]["recipe_likes"];
        $likes = $data[0]["recipe_likes"];
        $likes++;

        //echo "likes -> ".$likes;

        $database->update("tb_recipes",[
            "recipe_likes" => $likes
        ],[
            "id_recipe"=>$_GET["id_recipe"]
        ]);

        //header("location: recipes.php");
		header('Location: ' . $_SERVER['HTTP_REFERER']);//mala practica... inyecciones
		exit;

    }
    //var_dump($data);
?>