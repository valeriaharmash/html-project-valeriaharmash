<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Import PHPMailer library
  require 'phpmailer/PHPMailerAutoload.php';
  $mail = new PHPMailer;

  // Gmail SMTP settings
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 587;
  $mail->SMTPSecure = 'tls';
  $mail->SMTPAuth = true;
  $mail->Username = 'your_gmail_address@gmail.com'; // Replace with your Gmail address
  $mail->Password = 'your_gmail_password'; // Replace with your Gmail password

  // Sender and recipient info
  $mail->setFrom($email, $name);
  $mail->addAddress('recipient@example.com'); // Replace with the recipient email address
  $mail->Subject = 'New Contact Form Submission';
  $mail->Body = $message;

  // Send the email
  if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
    // Redirect back to the form or show a success message
    header("Location: index.html");
    exit();
  }
}
?>