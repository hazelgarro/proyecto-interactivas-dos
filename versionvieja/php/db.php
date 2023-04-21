<?php 
    namespace Medoo;
    require 'Medoo.php';

    if(!isset($database)){
        $database = new Medoo([
            // [required]
            'type' => 'mysql',
            'host' => 'db4free.net:3306',
            'database' => 'thekitchen_db',
            'username' => 'hazel_jenni',
            'password' => 'proyectoInteractivas'
        ]);
    }
?>