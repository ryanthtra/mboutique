<!--Add Your home page HTML here-->
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to MBoutique!</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="localize_global.js"></script>
    <script src="localize_index.js"></script>
    <?php
    include('pick_style.php');
    ?>
    <meta name="viewport" content="initial-scale=1, user-scalable=no">
</head>

<body>
        
<div class="page-wrapper">
    <div class="header">
        <?
        include('header.php');
        ?>
        <img class="logo-image" src="assets/images/<?echo $header_stuff['logo']['img_src'];?>">
        <div class="lang-flags">
            <? addLanguageFlags($header_stuff['languages']); ?>
        </div>
        <nav>
            <ul>
                <? createMenuLinks($header_stuff['my_links']); ?>
            </ul>
        </nav>
    </div>

    <? 
    if ($_GET)
        loadContent($_GET['loadcontent'], $header_stuff['my_links']); 
    else
        include_once('welcome.php');
    ?>

    <div class="footer">
        <? include_once('footer.php'); ?>
        <div id="f-top">
            <? insertContactLinks($footer_stuff['top']['contact']); ?>
            <div>
                <div>
                    <p>Follow us</p>
                    <? insertFollowLinks($footer_stuff['top']['follow']); ?>            
                </div>
            </div>
        </div>
        <div id="f-bottom">
            <? insertLegalInfo($footer_stuff['bottom']); ?>
        </div>
    </div>
</div>
</body>

</html>

<?
function loadContent($content_name='', $links_arr)
{
    if (isset($links_arr[$content_name]))
        include_once($content_name . '.php');
    else
        include_once('macawrong.php');
}
?>
