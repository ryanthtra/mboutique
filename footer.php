<?php

$footer_stuff = 
[
    'top'=>
    [
        'contact'=>
        [
            'email'=>
                [
                    'href'=>'mailto:order@mboutique.com',
                    'img_src'=>'mail.png',
                    'value'=>'order@mboutique.com'
                ],
            'phone'=>
                [
                    'href'=>'tel:+9498003111',
                    'img_src'=>'phone.png',
                    'value'=>'949.800-3111'
                ]
        ],
        'follow'=>
        [
            'facebook'=>
            [
                'href'=>'http://www.facebook.com/mboutique',
                'img_src'=>'facebook.png'
            ],
            'twitter'=>
            [
                'href'=>'http://www.twitter.com/mboutique',
                'img_src'=>'twitter.png'
            ]
        ]
    ],

    'bottom'=>
    [
        'copyright'=>'Copyright © 2014 MBoutique. All rights reserved.'
    ]
];

function insertContactLinks($links_arr)
{
    $image_path = "assets/images/";
    foreach($links_arr as $contact_type)
    {
        print_r("<div>");
        print_r("<a href=" . $contact_type['href'] . ">");
        print_r("<img src=" . $image_path . $contact_type['img_src'] . ">");
        print_r("<p>" . $contact_type['value'] . "</p></a>");
        print_r("</div>");
    }
}

function insertFollowLinks($links_arr)
{
    $image_path = "assets/images/";
    foreach($links_arr as $contact_type)
    {
        print_r("<a href=" . $contact_type['href'] . ">");
        print_r("<img src=" . $image_path . $contact_type['img_src'] . ">");
        print_r("</a>");
    }
}

function insertLegalInfo($legal_arr)
{
    foreach($legal_arr as $id=>$text_node)
    {
        print_r("<p id=" . $id . ">" . $text_node . "></p>");
    }
}

?>