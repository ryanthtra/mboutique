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
		'home'=>['url'=>'index.html', 'text'=>'Welcome'],
		'macarons'=>['url'=>'macarons.html', 'text'=>'Our Macarons'],
		'gifts'=>['url'=>'gifts.html', 'text'=>'Gifts & Parties'],
		'contact'=>['url'=>'contact.html', 'text'=>'Contact']
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
