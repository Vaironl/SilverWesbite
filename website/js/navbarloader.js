$(document).ready(function () {

    var navbarHTML = "    <div class=\"container-fluid\">\n" +
        "        <div class=\"row align-items-center\">\n" +
        "            <!-- Menu Area Start -->\n" +
        "            <div class=\"col-12 col-lg-10\">\n" +
        "                <div class=\"menu_area\">\n" +
        "                    <nav class=\"navbar navbar-expand-lg navbar-light\">\n" +
        "                        <!-- Logo -->\n" +
        "                        <!--<a class=\"navbar-brand\" href=\"#\">Biographies</a>-->\n" +
        "                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ca-navbar\"\n" +
        "                                aria-controls=\"ca-navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span\n" +
        "                                class=\"navbar-toggler-icon\"></span></button>\n" +
        "                        <!-- Menu Area -->\n" +
        "                        <div class=\"collapse navbar-collapse\" id=\"ca-navbar\">\n" +
        "                            <ul class=\"navbar-nav ml-auto\" id=\"nav\">\n" +
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./index.html\">Home</a></li>\n" +
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./biography.html\">Biography</a></li>\n" +
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./presentation.html\">Presentation</a></li>\n" +
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./deliverables.html\">Deliverables</a></li>\n" +
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./references.html\">References</a></li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                    </nav>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";

    $('.header_area').html(navbarHTML);

});

