<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST["first_name"]);
    $last_name = htmlspecialchars($_POST["last_name"]);
    $email = htmlspecialchars($_POST["email"]);
    $company = htmlspecialchars($_POST["company"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $country = htmlspecialchars($_POST["country"]);
    $relationship = htmlspecialchars($_POST["relationship"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "your-email@example.com"; // Change this to your email
    $subject = "New Contact Form Submission";
    $body = "Name: $first_name $last_name\n";
    $body .= "Email: $email\n";
    $body .= "Company: $company\n";
    $body .= "Phone: $phone\n";
    $body .= "Country: $country\n";
    $body .= "Relationship: $relationship\n\n";
    $body .= "Message:\n$message";

    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
