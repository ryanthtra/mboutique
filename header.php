<?php

date_default_timezone_set('utc');

$header_stuff =
[
    'logo'=>
    [
        'img_src'=>'logo.png'
    ],

    'languages'=>
    [
        'english'=>['img_src'=>'icon-flag-usa.png'],
        'german'=>['img_src'=>'german-flag-icon.png']
    ],
	
	'my_links'=>
	[
		'welcome'=>['url'=>'index.php?loadcontent=welcome', 'text'=>'Welcome'],
		'our_macarons'=>['url'=>'index.php?loadcontent=our_macarons', 'text'=>'Our Macarons'],
		'gifts_parties'=>['url'=>'index.php?loadcontent=gifts_parties', 'text'=>'Gifts & Parties'],
		'contact'=>['url'=>'index.php?loadcontent=contact', 'text'=>'Contact']
	]

	
];

function addLanguageFlags($languages_arr)
{
    $path = "assets/images/";
    foreach ($languages_arr as $language=>$data)
    {
        print_r('<img language=' . $language . ' src=' . $path . $data['img_src'] . ' />');
    }
}

function createMenuLinks($links_arr)
{
	$lia_first = "<li><a href=";
	$lia_second = ">";
	$lia_third = "</a></li>";
	foreach ($links_arr as $elem)
	{
		print_r($lia_first . $elem['url'] . $lia_second . $elem['text'] . $lia_third);
	}
}	

?>
