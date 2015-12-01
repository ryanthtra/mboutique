<img class="top-image" src="assets/images/contact-image.png" alt="Welcome Image">

<div class="midsection">
    <div id="cu-visit-us">
        <h2>Visit us!</h2>
        <p>Monday - Friday | 10am - 9pm</p>
        <p>Saturday | 10am - 8pm</p>
        <p>Sunday | 11am - 7pm</p>
        <p>Closed Thanksgiving Day, Christmas Day and Easter Day</p>
        <br>
        <p>1625 Post St</p>
        <p>San Francisco, CA 94115</p>
        <br>
        <p>949.800-3111</p>
        <br>
        <a href="mailto:order@mboutique.com">order@mboutique.com</a>
        <br>
        <br>
        <p>Send your questions, comments and flavor suggestions or place an order!</p>
    </div>
    <div id="cu-contact-form">
        <?
        if ($_POST)
        {
            validateForm($_POST);
        }
        else
        {
        ?>
        <h2>Contact Form</h2>
        <form action="index.php?loadcontent=contact" method="post">
            <p>Name</p>
            <input type="text" name="name">
            <p>Email</p>
            <input type="text" name="email">
            <p>Phone</p>
            <input type="text" name="phone">
            <p>Subject</p>
            <input type="text" name="subject">
            <p>Message</p>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <br>
            <input type="submit" value="SEND">
        </form>
        <?
        }
        ?>
    </div>
    <img id=cu-macarons-img src="assets/images/macarons-image.png" alt="Macarons Image">
</div>

<?
function validateForm($form_data)
{
    print_r($form_data);
}
?>