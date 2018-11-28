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
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./presentation.html\">Presentations</a></li>\n" +
        "<div class=\"btn-group\">\n" +
        "                                    <a id=\"dropdown-link\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                                        Deliverables\n" +
        "                                    </a>\n" +
        "                                    <div class=\"dropdown-menu\">\n" +
        "                                        <a class=\"dropdown-item\" href=\"./userstories.html\">User Stories</a>\n" +
        "                                        <!--<div class=\"dropdown-divider\"></div>-->\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">MFCD</a>\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">Process Flow</a>\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">Solution Flow</a>\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">Algorithms</a>\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">Prototype MFCD</a>\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">Risks</a>\n" +
        "                                        <a class=\"dropdown-item\" href=\"#\">WBS</a>\n" +
        "                                    </div>\n" +
        "                                </div>" +
		"                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./userstories.html\">User Stories</a></li>\n" +
        "                                <li class=\"nav-item\"><a class=\"nav-link\" href=\"./references.html\">References</a></li>\n" +
		"								 <li class=\"nav-item\"><a class=\"nav-link\" href=\"./downloads.html\">Downloads</a></li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                    </nav>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";

    $('.header_area').html(navbarHTML);

});
