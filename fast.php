<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = trim($_post['name']);
    $email = trim($_post['email']);
    $message = trim($_post['message']);

    if (empty($name) || empty($email) ||empty($message) ||!filter_var($email, FILTER_VALIDATE_EMAIL)){
        http_response_code(405);
        echo 'data tidak valid.';
        exit;
    }

    $to = 'danidavenoza@gmail.com';
    $subject = 'pesann kontak baru dari ' .$name;
    $body = "nama: $name\nemail: $email\npesan:\n$message";
    $headers ="from: $email";

    if (mail($to, $subject, $body, $headers)){
        echo 'pesan berhasil dikirim.';
    } else {
        http_response_code(500);
        echo 'terjadi kesalahan. pesan tidak dapat dikirim.';
    }
}  else {
    http_response_code(405);
    echo 'metode tidak di izinkan.';
}
?>