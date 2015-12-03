//var buildStringContent = {
//    welcome: buildStringContent_welcome,
//    our_macarons: buildStringContent_our_macarons,
//    gifts_parties: buildStringContent_gifts_parties,
//    contact: buildStringContent_contact
//};

function buildStringContent_welcome(language)
{
    // Welcome Info
    var welcome = $('#welcome-info').html('');
    welcome.append($('<h2>').text(language.welcome_info_welcome_header));
    welcome.append($('<p>').text(language.welcome_info_welcome_paragraph));
    welcome.append($('<h2>').text(language.welcome_info_we_love_header));
    welcome.append($('<p>').text(language.welcome_info_we_love_paragraph1));
    welcome.append($('<p>').text(language.welcome_info_we_love_paragraph2));
    welcome.append($('<h2>').text(language.welcome_info_try_sample_header));

    // Flavor Samples
    var flavor_days = $('.flavor-day');
    for (var i = 0; i < flavor_days.length; i++) {
        $(flavor_days[i]).find('.day-name').text(language.flavor_schedule[i].day);
        $(flavor_days[i]).find('.flavor-day-top>p:last-of-type').text(language.flavor_schedule[i].time);
        $(flavor_days[i]).find('.flavor-day-banner:first-of-type>p').text(language.flavor_schedule[i].flavor1);
        $(flavor_days[i]).find('.flavor-day-banner:last-of-type>p').text(language.flavor_schedule[i].flavor2);
    }
}

function buildStringContent_our_macarons(language)
{
    var our_macarons = $('#our-macarons-section').html('');
    our_macarons.append($('<h2>').text(language.our_macarons_header));
    our_macarons.append($('<p>').text(language.our_macarons_paragraph));

    var classics = $('#classics-section').html('');
    classics.append($('<h2>').text(language.classics_header));
    var flavors_list = $('<ul>');
    for (var i = 0; i < language.classics_flavors.length; i++) {
        flavors_list.append($('<li>').text(language.classics_flavors[i]));
    }
    classics.append(flavors_list);

    var recommendations = $('#recommendation-section').html('');
    recommendations.append($('<p>').text(language.recommendations_paragraph));
}

function buildStringContent_gifts_parties(language)
{
    var lets_eat = $('#gp-lets-eat-section');
    lets_eat.find('h2').text(language.lets_eat_header);
    lets_eat.find('span').text(language.lets_eat_paragraph);

    var gift = $('#gp-gift-section');
    gift.find('h2').text(language.gifts_header);
    gift.find('p').text(language.gifts_paragraph);
    var gifts_ul = $('#gp-gift-section').find('ul').html('');
    for (var i = 0; i < language.gifts_list.length; i++) {
        gifts_ul.append($('<li>').text(language.gifts_list[i]));
    }
    gift.append(gifts_ul);

    var party = $('#gp-party-section');
    party.find('h2').text(language.party_header);
    party.find('p').text(language.party_paragraph);
    var party_ul = $('<ul>').html('');
    for (var i = 0; i < language.party_list.length; i++) {
        party_ul.append($('<li>').text(language.party_list[i]));
    }
}

function buildStringContent_contact(language)
{
    var visit_us = $('#cu-visit-us');
    visit_us.find('h2').text(language.visit_us_header);
    var vu_paragraphs = visit_us.find('p');
    for (var i = 0; i < vu_paragraphs.length; i++) {
        $(vu_paragraphs[i]).text(language.visit_us_paragraphs[i]);
    }

    // Contact Form
    var contact = $('#cu-contact-form');
    contact.find('h2').text(language.contact_form_header);
    var labels = contact.find('p');
    for (var i = 0; i < labels.length; i++) {
        $(labels[i]).text(language.contact_form_labels[i]);
    }
    contact.find('input[type=submit]').val(language.contact_form_button);
}

