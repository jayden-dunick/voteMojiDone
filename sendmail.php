<?php
/*include PHPMailer class*/
require_once('phpmailer/PHPMailer.php');
/*Import the PHPMailer class into the global namespace*/
use PHPMailer\PHPMailer\PHPMailer;

/*catch post data*/
$user = $_POST['name'];
$userEmail = $_POST['email'];
$targetDir = "uploads/";
/*Set content*/
$to = "mojivote@gmail.com";
/*$to = "matsteve16@gmail.com";*/
$subject = "$user Votemoji";
$msg = "";

if (array_key_exists('image', $_FILES)) {
    // First handle the upload
    // Don't trust provided filename - same goes for MIME types
    // See http://php.net/manual/en/features.file-upload.php#114004 for more thorough upload validation
    //$uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['userfile']['name']));
    
    $targetFile = $targetDir . basename($_FILES["image"]["name"]);
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        // Upload handled successfully
        // Now create a message
        //require '../vendor/autoload.php';
        $mail = new PHPMailer;
        $mail->setFrom($userEmail, $user.' Votemoji');
        $mail->addAddress($to, 'Votemoji');
        $mail->addAddress($userEmail, $user);
        $mail->Subject = 'Votemoji Image for '.$user;
        $mail->Body = 'Votemoji Image for '.$user;
        // Attach the uploaded file
        if (!$mail->addAttachment($targetFile, 'votemoji-image.jpg')) {
            $msg .= 'Failed to attach file ' . $_FILES['image']['name'];
        }
        if (!$mail->send()) {
            $msg .= 'Mailer Error: '. $mail->ErrorInfo;
        } else {
            //$msg .= 'Message sent!';
            header("Location: http://votemoji.behindopendoors.nz/");
        }
    } else {
        $msg .= 'Failed to move file to ' . $uploadfile;
    }
}

echo $msg;

?>