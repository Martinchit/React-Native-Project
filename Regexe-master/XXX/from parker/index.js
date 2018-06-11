//for section hidden and show
$(document).ready(function () {

    $("#section-contact").hide();
    $("#section-tool").hide();

    $("#index-tool").click(function () {
        $("#section-contact").hide();
        $(".section-index").hide();
        $("body:before").hide();
        $("#section-tool").show();
    });

    $("#index-contact").click(function () {
        $("#section-tool").hide();
        $(".section-index").hide();
        $("#section-contact").show();
    });

    $(".index-index").click(function () {
        $("#section-tool").hide();
        $(".section-index").show();
        $("#section-contact").hide();
    });
});

$(document).ready(function () {
    $(".section-login").show();
    $(".section-sign-up").hide();
    $(".to-sing-up").click(function () {
        $(".section-login").hide();
        $(".section-sign-up").show();
    });
    $(".to-login").click(function () {
        $(".section-sign-up").hide();
        $(".section-login").show();
    });
});

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});



