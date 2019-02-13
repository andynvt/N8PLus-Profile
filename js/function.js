$(function () {
    $.fn.scrollToTop = function () {
        var scrollDiv = $(this);
        scrollDiv.hide();

        if ($(window).scrollTop() !== "0") {
            scrollDiv.fadeIn("slow");
        } else {

        }
        $(this).click(function () { // Sự kiện click nút
            $("html, body").animate({
                scrollTop: 0
            }, "slow"); // Tạo hiệu ứng chuyển mượt
            return false;
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() < $(window).outerHeight() / 2) {
                scrollDiv.stop(false, true).fadeOut(300);

            } else {
                scrollDiv.stop(false, true).fadeIn(300);
            }
        });
    };
    $.fn.toggleNav = function () {
        var _this = $(this);
        var target = _this.data("target");
        $(this).click(function () {
            $(target).toggleClass("in");
            $('.wrapper').toggleClass("offLeft");
            if ($(this).find("i").hasClass('fa-navicon')) {
                $(this).find("i").removeClass('fa-navicon').addClass('fa-arrow-left');
            } else {
                $(this).find("i").removeClass('fa-arrow-left').addClass('fa-navicon');
            }
        });
        var container = $(".navbar-collapse"),
            toggleBtn = $(".navbar-toggle");
        $(document).click(function (e) {
            e.stopPropagation();
            var dk1 = !container.is(e.target) && container.has(e.target).length === 0,
                dk2 = !toggleBtn.is(e.target) && toggleBtn.has(e.target).length === 0;
            if (dk1 && dk2) {
                $(target).removeClass("in");
                $('.wrapper').removeClass("offLeft");
                $(this).find("i").removeClass('fa-arrow-left').addClass('fa-navicon');
            }
        });
        $(target).find("a").click(function () {
            $(target).removeClass("in");
            $('.wrapper').removeClass("offLeft");
            _this.find("i").removeClass('fa-arrow-left').addClass('fa-navicon');

        })
        $('.navbar-brand').click(function () {
            $(target).find('li').removeClass('active');
            _this.find("i").removeClass('fa-arrow-left').addClass('fa-navicon');
        })
        $(window).resize(function () {
            $(target).removeClass("in");
            $('.wrapper').removeClass("offLeft");
            _this.find("i").removeClass('fa-arrow-left').addClass('fa-navicon');
        })
    }
    $.fn.closeNav = function () {
        var _this = $(this);
        var target = _this.data("target");
        $(this).click(function () {
            $(target).removeClass("in");
        });
    }
    $.fn.fixedNav = function () {
        var $navHeight = $(this).height();
        var this_ = $(this);
        var top = $(window).scrollTop();
        if (top > $navHeight + 1) {
            this_.addClass('navbar-fixed-top');
        }
        if (top < $navHeight - 1) {
            this_.removeClass('navbar-fixed-top');
        }
        $(window).scroll(function (e) {
            var top = $(window).scrollTop();
            if (top > $navHeight + 1) {
                this_.addClass('navbar-fixed-top');
            }
            if (top < $navHeight - 1) {
                this_.removeClass('navbar-fixed-top');
            }
        });
    }
    $.fn.scrollPage = function () {
        var top, h;
        var li = $(".dotnav>li");

        li.eq(0).addClass('active');

        $('html,body').scrollTop(0);

        $(window).scroll(function () {
            top = $(window).scrollTop();
            h = $(window).height();
            li.removeClass("active");
            li.eq(Math.round(top / h)).addClass('active');
            //            .removeClass('active');
        })
        $(this).click(function () {
            var parent = $(this).parent();
            parent.siblings("li").removeClass("active");
            parent.addClass("active");
            var aTag = this.hash;
            $('html,body').animate({
                scrollTop: $(aTag).offset().top
            }, 'slow');
        })
    }
});

$(document).ready(function () {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 4500);

    });
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});
$(function scroller() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });

})
$(function changeTab() {
    $(".tab-name>a").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass("active").removeAttr("href");
        // Xóa thuộc tính "href" trong phần HTML nếu có
        var tab = $(this).data("target");
        $("#" + tab).siblings().removeClass("active");
        $("#" + tab).toggleClass("active");
    })

});
$.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};
$.fn.clearContents = function () {
    var this_ = $(this);
    var text = this_.val();
    $(this).focusin(function () {
        if (this_.val() == text) {
            this_.val('');
        }
    }).focusout(function () {
        if (this_.val() == "") {
            this_.val(text);
        }
    });
}
