<?php 
$headers = [
  'From' => 'JefMcD <vooshop@artillery-voo.com>',
  'Cc' => 'JefMcD <jefrusralston@googlemail.com>',
  'Reply-To' => 'vooshop@artillery-voo.com',
  'X-Sender' => 'artillery <artiller@artillery-voo.com>',
  'X-Mailer' => 'PHP/' . phpversion(),
  'X-Priority' => '1',
  'Return-Path' => 'artilleryvoo@protonmail.com',
  'MIME-Version' => '1.0',
  'Content-Type' => 'text/html; charset=iso-8859-1'
];

mail('recipient@host.com', 'My subject', 'My message', $headers);

$errors = '';
$myemail = 'artilleryvoo@protonmail.com';//<-----Put Your email address here.
if(empty($_POST['firstname'])  || 
   empty($_POST['email']) )
{
    $errors .= "\n Error: You must enter your Name and email address";
};
$merch_type=$_POST['merch_type']; 
$name = $_POST['firstname']; 
$lastname = $_POST['lastname']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 


if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)){
	$errors .= "\n Error: Invalid email address";
} ;

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Message From Artillery Voo: $name";
	$email_body = "You have received a message "." Here are the details: "
	."\n Merch Type:" . $merch_type 
	."\n Name: " . $name 
	."\n Last Name: " . $lastname 
	."\n Email:  " . $email_address 
	."\n Message \n " . $message; 
	
	mail($to,$email_subject,$email_body, $headers);
	
	//redirect to the 'thank you' page
     header('Location: enquiry-form-confirmation.html');

} ;
?>





<!DOCTYPE php PUBLIC "-//W3C//DTD Xphp 1.0 Strict//EN" "http://www.w3.org/TR/xphp1/DTD/xphp1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xphp" xml:lang="en">

<head>

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="author" content="artillery voo Jef McD" />
  <meta name="keywords" content="Thank You" />
  <meta name="description" content="Thank You" />
  <meta name="robots" content="all" />
  <meta name="title" content="Artillery Voo" />

  <title>Processing Error!</title>

  <link rel="icon" href="../../images/favicon/purple-logo-48.ico">
  <link rel="stylesheet" href="../../css/navbar-style.css?v0.1">
  <link rel="stylesheet" href="../../css/artVoo-footer.css?v0.1">
  <link rel="stylesheet" href="../../css/artillery-voo-style.css?v0.1">
  <link rel="stylesheet" href="../../css/fonts.css?v0.1">
  <link rel="stylesheet" href="../../css/media-queries.css?v0.1">
  <link rel="stylesheet" href="../../css/artVoo-color-scheme.css ">

  <script src="../../javascript/include-html-code.js?v0.1" type="text/javascript"></script>
  <script src="../../javascript/navbar.js" type="text/javascript" defer></script>

</head>

<body>

  <div class="positionCenterFixed" id="fixedNav" INCLUDE-HTML="../../html-block/artillery-nav.html">
    <script type="text/javascript">
      includeHTML();
    </script>

  </div>
  <style>
    #navbarTitle::after {
      content: 'Oops!';
    }
  </style>

  <main class="art-voo-main-wrapper">




    <div class="pic-story">
      <h3 class="thanks">Oops there was a Problem!</h3>
      <div class = "underline"></div>
      <div class="story-box">
        There has been a validation error! This just means that something in the information we received didnt make sense.
    </div>
      <div class="story-box">
         Please Go back and try again
      </div>
      <div class="story-box">
        <?php
        echo nl2br($errors.' '.$email_body);
      ?>
       <div class="pic-story">
           <div class="pic-story-image">
             <a href="../../enquiries.html">RETURN</a>
           </div>
       </div>	
      </div>
    </div>



    <div id="footer" INCLUDE-HTML="../../html-block/footer-av.html">
      <script>
        includeHTML();
      </script>
    </div>



  </main>




</body>

</html>