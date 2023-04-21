<?php 
    require 'db.php';

    $pass = password_hash("pass01", PASSWORD_DEFAULT, ['cost' => 12]);

    $database->insert("tb_users",[
        "user_name"=>"user01",
        "password"=>$pass
    ]);
?>