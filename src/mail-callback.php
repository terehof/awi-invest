<?php

$frm_name  = "Avi Invest"; // from name
$recepient = 'a.dedov@nedvex.ru';
$sitename  = "Ави Инвест";
$subject   = "Заявка с сайта. Форма \"Обратный звонок\"";


$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$send_message = "<div style='font-size: 16px;'>
<br>
<b>Имя:</b> $name <br><br>
<b>Телефон:</b> $phone <br><br>
<br>
</div>";

mail($recepient, $subject, $send_message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
echo 'Ok!';