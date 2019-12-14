
// $(document).ready(function () {
    $('#nav-icon-hamburger').click(function () {
        $(this).toggleClass('open');
        $("#nav-link-one").toggleClass("move-right");
        $("#nav-link-two").toggleClass("move-right");
    });
// });



$(".helmet-hover").mouseenter(
    function () {
        $("#svg-container-parts-active").addClass("visible");
        $("#svg-container-parts-active").removeClass("not-visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");

    });

$(".helmet-hover").mouseout(
    function () {
        $("#svg-container-parts-active").addClass("not-visible");
        $("#svg-container-parts-active").removeClass("visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");

    });

$(".mercury-gloves-hover").mouseenter(
    function () {
        $("#svg-container-parts-gloves").removeClass("not-visible");
        $("#svg-container-parts-gloves").addClass("visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");
    });

$(".mercury-gloves-hover").mouseout(
    function () {
        $("#svg-container-parts-gloves").removeClass("visible");
        $("#svg-container-parts-gloves").addClass("not-visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");
    });

$(".mercury-boots-hover").mouseenter(
    function () {
        $("#svg-container-parts-boots").removeClass("not-visible");
        $("#svg-container-parts-boots").addClass("visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");
    });

$(".mercury-boots-hover").mouseout(
    function () {
        $("#svg-container-parts-boots").removeClass("visible");
        $("#svg-container-parts-boots").addClass("not-visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");
    });

$(".mercury-tank-hover").mouseenter(
    function () {
        $("#svg-container-parts-tank").removeClass("not-visible");
        $("#svg-container-parts-tank").addClass("visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");
    });

$(".mercury-tank-hover").mouseout(
    function () {
        $("#svg-container-parts-tank").removeClass("visible");
        $("#svg-container-parts-tank").addClass("not-visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");
    });

$(".helmet-hover").mouseenter(
    function () {
        $("#svg-container-parts-active").addClass("visible");
        $("#svg-container-parts-active").removeClass("not-visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");

    });

// ships-genaral-code
$(".hover-1").mouseenter(
    function () {
        $("#svg-container-parts-hover-1").addClass("visible");
        $("#svg-container-parts-hover-1").removeClass("not-visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");

    });

$(".hover-1").mouseout(
    function () {
        $("#svg-container-parts-hover-1").addClass("not-visible");
        $("#svg-container-parts-hover-1").removeClass("visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");

    });

$(".hover-2").mouseenter(
    function () {
        $("#svg-container-parts-hover-2").addClass("visible");
        $("#svg-container-parts-hover-2").removeClass("not-visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");

    });

$(".hover-2").mouseout(
    function () {
        $("#svg-container-parts-hover-2").addClass("not-visible");
        $("#svg-container-parts-hover-2").removeClass("visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");

    });






