$(function () {
    var slideIndex = 0,
        replay;

    var container = $(".content-member"),
        slider = $(".swiper"),
        prev = $(".prev"),
        next = $(".next"),
        items = $(".slide-item");
    var setSlide = function (n) {
        switch (n) {
            case 0:
                slider.removeClass("chuna andy phi phuc");
                container.removeClass("chuna andy phi phuc");
                slider.addClass("chuna");
                container.addClass("chuna");
                break;
            case 1:
                slider.removeClass("chuna andy phi phuc");
                container.removeClass("chuna andy phi phuc");
                slider.addClass("andy");
                container.addClass("andy");
                break;
            case 2:
                slider.removeClass("chuna andy phi phuc");
                container.removeClass("chuna andy phi phuc");
                slider.addClass("phi");
                container.addClass("phi");
                break;
            case 3:
                slider.removeClass("chuna andy phi phuc");
                container.removeClass("chuna andy phi phuc");
                slider.addClass("phuc");
                container.addClass("phuc");
                break;

        }
    }
    var show = function (n) {
        if (n > items.length - 1) {
            slideIndex = 0
        }
        if (n < 0) {
            slideIndex = items.length - 1
        }
        for (i = 0; i < items.length; i++) {
            items.eq(i).removeClass('active');
        }
        items.eq(slideIndex).addClass('active');
        setSlide(slideIndex);
    }

    function showAuto() {
        if (slideIndex > items.length - 1) {
            slideIndex = 0
        }
        for (i = 0; i < items.length; i++) {
            items.eq(i).removeClass('active');
        }
        items.eq(slideIndex).addClass('active');
        setSlide(slideIndex);
        slideIndex++;
    }

    function startAuto() {
        replay = setInterval(function () {
            showAuto();
        }, 8000);
    };

    function stopAuto() {
        clearInterval(replay);
    }
    startAuto();
    show(slideIndex);

    function plusSlides(n) {
        show(slideIndex += n);
    }
    prev.click(function () {
        plusSlides(-1);
    });
    next.click(function () {
        plusSlides(1);
    });
    prev.hover(stopAuto).mouseleave(startAuto);
    next.hover(stopAuto).mouseleave(startAuto);
    $(window).resize(function () {
        if ($(window).outerWidth() < 768) {
            stopAuto();
        } else {
            startAuto();
        }
    });
    $(document).ready(function () {
        if ($(window).outerWidth() < 768) {
            stopAuto();
        } else {
            startAuto();
        }
    })
});
$.fn.selectTab = function () {
    $(this).click(function () {
        var target = $(this).data("target");
        $(".skill-content").removeClass("one two three");
        $(".tab-item").removeClass("active");
        if (target == "#skill-one") {
            $(this).addClass("active");
            $(".skill-content").addClass("one")
        }
        if (target == "#skill-two") {
            $(this).addClass("active");
            $(".skill-content").addClass("two")
        }
        if (target == "#skill-three") {
            $(this).addClass("active");
            $(".skill-content").addClass("three")
        }
    })
}
