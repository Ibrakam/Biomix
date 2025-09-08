$(function() {


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset - 150
        }, 700);


    });

             /* navToggle */

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /* Mailer */

    $('#form').on('submit', function(e){
 e.preventDefault();
 var fd = new FormData(this);
 $.ajax({
 url: 'send.php',
 type: 'POST',
 contentType: false,
 processData: false,
 data: fd,
 success: function(msg){
if(msg == 'ok') {
 alert('Отправлено');
} else {
 alert('Ошибка')
}
 }
 });
 });









});
