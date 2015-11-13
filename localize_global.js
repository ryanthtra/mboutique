// Globals
var english_strings =
    {
        header_welcome: "welcome",
        header_our_macaroons: "our macaroons",
        header_gifts_parties: "gifts & parties",
        header_contact: "contact",
        footer_follow_us: "Follow us",
        footer_legal: "Copyright © 2014 MBoutique. All rights reserved.",
        welcome_info_welcome_header: "Welcome to MBoutique!",
        welcome_info_welcome_paragraph: "We're a home-based baking business that specializes in the making of French macarons, a gluten-free pastry item made from ground almonds. Our business began at the West Reading Farmers Market in 2011.  Last year (2013) marked our third and final season of participation at the market.  MBoutique was established to pay homage to the delicate French confectionery, the macaron. Our shop has been recognized as the connoisseurs of this delicious French pastry because of the wonderful variety of flavors from our great master chefs.",
        welcome_info_we_love_header: "We love Macarons!",
        welcome_info_we_love_paragraph1: "Renowned macarons, French delights of the moment can be met in a variety of flavors and colors and are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanket jam, chocolate butter cream is spread inviting.",
        welcome_info_we_love_paragraph2: "Macarons combines perfectly with champagne or white wine, tea or hot chocolate, fresh juices and natural fruit flavored coffee and guarantee that these little delights soon become friend that you can not break.",
        welcome_info_try_sample_header: "Find the flavor that you like.  Try a sample every day!",
        flavor_schedule: [
            // Monday
            {
                day: 'Monday',
                time: '15:00 - 16:00',
                flavor1: 'chocolate',
                flavor2: 'coconut'
            },
            // Tuesday
            {
                day: 'Tuesday',
                time: '14:00 - 15:00',
                flavor1: 'violet cassis',
                flavor2: 'green tea'
            },
            // Wednesday
            {
                day: 'Wednesday',
                time: '09:00 - 10:00',
                flavor1: 'passion fruit',
                flavor2: 'vanilla'
            },
            // Thursday
            {
                day: 'Thursday',
                time: '18:00 - 19:00',
                flavor1: 'coffee',
                flavor2: 'pistachio'
            },
            // Friday
            {
                day: 'Friday',
                time: '11:00 - 12:00',
                flavor1: 'raspberry',
                flavor2: 'lemon'
            },
            // Saturday
            {
                day: 'Saturday',
                time: '13:00 - 14:00',
                flavor1: 'rose',
                flavor2: 'tiffany blue'
            },
            // Sunday
            {
                day: 'Sunday',
                time: '10:00 - 11:00',
                flavor1: 'caramel',
                flavor2: 'almond'
            },
        ],

    };

var german_strings =
    {
        header_welcome: "Willkommen",
        header_our_macaroons: "Unsere Makronen",
        header_gifts_parties: "Geschenke & Parteien",
        header_contact: "Kontakt",
        footer_follow_us: "Folgen Sie uns",
        footer_legal: "Copyright © 2014 MBoutique. Alle Rechte vorbehalten.",
        welcome_info_welcome_header: "Willkommen bei MBoutique!",
        welcome_info_welcome_paragraph: "Wir sind ein Haus-gegründetes Backen-Unternehmen, das spezialisiert auf die Herstellung des französischen Macarons, ein glutenfreies Gebäck-Element aus gemahlenen Mandeln hergestellt. 2011 begann unser Geschäft an der West-Lesung-Bauernmarkt.  Letztes Jahr (2013) markiert unsere dritte und letzte Saison der Teilnahme an den Markt.  MBoutique wurde gegründet, um die Hommage an die zarte französische Konditorei, die Macaron. Unser Shop ist wegen der wunderbaren Vielfalt von Aromen aus unserer großen Meisterköchen als die Kenner dieses leckere Gebäck anerkannt.",
        welcome_info_we_love_header: "Wir lieben die Macarons!",
        welcome_info_we_love_paragraph1: "Berühmten Macarons, französische Freuden des Augenblicks können in einer Vielzahl von Geschmacksrichtungen und Farben erfüllt werden und sind gerade wegen ihrer Einfachheit - knusprige Beschichtung, brillant, aber zarte in einem losen Decke Marmelade, Schokolade-Butter-Creme ist verbreitet einladen.",
        welcome_info_we_love_paragraph2: "Macarons kombiniert perfekt mit Champagner oder Weisswein, Tee oder heiße Schokolade, frische Säfte und natürliche Frucht gewürzte Kaffee und Garantie, dass diese kleinen Freuden bald Freund geworden, die Sie nicht brechen kann.",
        welcome_info_try_sample_header: "Finde den Geschmack, den Ihnen gefallen.  Versuchen Sie eine Probe jeden Tag!",
        flavor_schedule: [
            // Monday
            {
                day: 'Montag',
                time: '15.00 - 16.00',
                flavor1: 'Schokolade',
                flavor2: 'Kokosnuss'
            },
            // Tuesday
            {
                day: 'Dienstag',
                time: '14.00 - 15.00',
                flavor1: 'Violet Cass',
                flavor2: 'Grüner Tee'
            },
            // Wednesday
            {
                day: 'Mittwoch',
                time: '09.00 - 10.00',
                flavor1: 'Passionsfrucht',
                flavor2: 'Vanille'
            },
            // Thursday
            {
                day: 'Donnerstag',
                time: '18.00 - 19.00',
                flavor1: 'Kaffee',
                flavor2: 'Pistazie'
            },
            // Friday
            {
                day: 'Freitag',
                time: '11.00 - 12.00',
                flavor1: 'Himbeere',
                flavor2: 'Zitrone'
            },
            // Saturday
            {
                day: 'Samstag',
                time: '13.00 - 14.00',
                flavor1: 'Rose',
                flavor2: 'Tiffany blau'
            },
            // Sunday
            {
                day: 'Sonntag',
                time: '10.00 - 11.00',
                flavor1: 'Karamell',
                flavor2: 'Mandel'
            },
        ],
    };

var language =
{
    english: english_strings,
    german: german_strings
};

var current_language = language.german;

function buildGlobalStrings(language) {
    // Header
    var list_items = $('.header>nav>ul>li>a');
    $(list_items[0]).text(language.header_welcome);
    $(list_items[1]).text(language.header_our_macaroons);
    $(list_items[2]).text(language.header_gifts_parties);
    $(list_items[3]).text(language.header_contact);

    // Footer
    var footer_divs = $('#f-top>div');
    $(footer_divs[2]).find('p').text(language.footer_follow_us);
    $('#f-bottom>p').text(language.footer_legal);
}