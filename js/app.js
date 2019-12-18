
    $('#nav-icon-hamburger').click(function () {
        $(this).toggleClass('open');
        $("#nav-link-one").toggleClass("move-right");
        $("#nav-link-two").toggleClass("move-right");
    });



// card behavoiur code
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

$(".hover-3").mouseenter(
    function () {
        $("#svg-container-parts-hover-3").addClass("visible");
        $("#svg-container-parts-hover-3").removeClass("not-visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");

    });

$(".hover-3").mouseout(
    function () {
        $("#svg-container-parts-hover-3").addClass("not-visible");
        $("#svg-container-parts-hover-3").removeClass("visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");

    });
$(".hover-4").mouseenter(
    function () {
        $("#svg-container-parts-hover-4").addClass("visible");
        $("#svg-container-parts-hover-4").removeClass("not-visible");
        $("#svg-container-parts").removeClass("visible");
        $("#svg-container-parts").addClass("not-visible");

    });

$(".hover-4").mouseout(
    function () {
        $("#svg-container-parts-hover-4").addClass("not-visible");
        $("#svg-container-parts-hover-4").removeClass("visible");
        $("#svg-container-parts").removeClass("not-visible");
        $("#svg-container-parts").addClass("visible");

    });






