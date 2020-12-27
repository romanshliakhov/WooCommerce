<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$frm = $_POST['frm'];
	

	$to = "romanshliakhov@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = 'test@mail.com';
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n 	
    Откуда: $frm "; 	
	mail($to, $subject, $msg, "From: $from ");

?>


