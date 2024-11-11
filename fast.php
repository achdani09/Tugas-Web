<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = trim($_post['name']);
    $email = trim($_post['email']);
    $message = trim($_post['message']);

    if (empty($name) || empty($email) ||empty($message) ||!filter_var($email, FILTER_VALIDATE_EMAIL)){
        http_response_code(400);
        echo 'data tidak valid.';
        exit;
    }
} 
?>