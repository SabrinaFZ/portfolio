$(document).ready(function () {
    $(".navigator a").on('click', function (event) {
        
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            console.log($(hash).offset().top);

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});