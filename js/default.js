$(document).ready(function () {
    $(function () {
        $('.navbar-toggle').toggleNav();
        $(".toTop").scrollToTop();
        $('.navbar').fixedNav();
        $(".tab-item").selectTab();
        $('.contact-form input').each(function () {
            $(this).clearContents()
        });
        $('.contact-form textarea').each(function () {
            $(this).clearContents()
        });
        $('.slider').slick({
            autoplay: true,
            draggable: true,
            arrows: true,
            dots: false,
            fade: true,
            speed: 850,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100
        })
        $(".slick-prev").val('');
        $(".slick-next").html('');
        $(".slick-prev").append($("<span class='arrow'><i class='fa fa-angle-double-left'></i></span>"));
        $(".slick-next").append($("<span class='arrow'><i class='fa fa-angle-double-right'></i></span>"));
    });
});
