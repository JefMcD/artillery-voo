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

$errors = '';
$myemail = 'artilleryvoo@protonmail.com';//<-----Put Your email address here.

$order_block = $_POST['order_block'];

if(empty($_POST['firstname'])){
    $errors .= "\n Error: You must enter your First Name";
}else{
  $firstname = $_POST['firstname'];
};

if(empty($_POST['lastname'])){
    $errors .= "\n Error: You must enter your lastname";
}else{
    $lastname = $_POST['lastname'];
};

if(empty($_POST['email'])){
  $errors .= "\n Error: You must enter your email address";
}else{
	$email_address = $_POST['email'];
};

if(empty($_POST['house_number'])){
  $errors .= "\n Error: You must enter your house number";
}else{
  $houseNum = $_POST['house_number'];  
};

if(empty($_POST['street'])){
  $errors .= "\n Error: You must enter your Street";
}else{
  $street = $_POST['street']; 
};

if(empty($_POST['city'])){
  $errors .= "\n Error: You must enter your City";
}else{
  $city = $_POST['city']; 
};

if(empty($_POST['country'])){
  $errors .= "\n Error: You must enter your Country";
}else{
  $country = $_POST['country'];  
};

if(empty($_POST['postcode'])){
  $errors .= "\n Error: You must enter your Postcode";
}else{
  $country = $_POST['postcode'];  
};


if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)){
	$errors .= "\n Error: Invalid email address";
} ;

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Message From Artillery Voo: $name";
	$email_body = "You have received a message "." Here are the details: "
	."\n First Name:" . $firstname 
	."\n lastname: " . $lastname 
	."\n email: " . $email_address 
	."\n House Number:  " . $houseNum 
	."\n Street: " . $street
	."\n Area: " . $area                                                                                                                      
	."\n City: " . $city
	."\n Country: " . $country
	."\n postcode: " . $postcode
  ."\n order block: " . $order_block; 
	

  // mail to artillery
	mail($to,$email_subject,$email_body, $headers);

    // confirmation email to customer
  $order_confirmation = "Thank you for your Order. It has been received and is being processed";
  mail($email_address,"Artillery Voo Order Confirmation", $order_confirmation, $headers);
	
	//redirect to the 'thank you' page
  header('Location: contact-form-thank-you.html?v0.1');

};
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
        Dont worry your shopping basket is still saved. Please correct the following errors and resubmit:
      </div>
      <div class="story-box">
        <?php
        echo nl2br($errors.' '.$email_body);
      ?>
       <div class="pic-story">
           <div class="pic-story-image">
             <a href="../../index.html">RETURN</a>
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