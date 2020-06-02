$(document).ready(function() {

    $("html, body").animate({
        scrollTop: 0
      }, 0);

    function diagram() {
        if($(window).width() < 1000) {
            $('.diagram').css('height', $('.my-skils').width() + 'px');
        }
        else {
            $('.diagram').css('height', '250px');
        }
    }

    diagram();

    $(window).resize(function() {
        diagram();
    });


    $('.more-link-about, .nav-about').click(function() {
        var $offset = $('.about-me').offset().top;
        $("html, body").animate({
            scrollTop: $offset
          }, 1000, 'easeOutQuart');
    });

    $('.nav-home').click(function() {
        $("html, body").animate({
            scrollTop: 0
          }, 1000, 'easeOutQuart');
    });

    $('.more-link-works, .nav-works').click(function() {
        var $offset = $('.selected-works').offset().top;
        $("html, body").animate({
            scrollTop: $offset
          }, 1000, 'easeOutQuart');
    });

    $('.more-link-contacts, .nav-contacts').click(function() {
        var $offset = $('.footer').offset().top;
        $("html, body").animate({
            scrollTop: $offset
          }, 1000, 'easeOutQuart');
    });


    var start = true;

    function show_circles() {
        var time = 300;
        var anime_start = 100;
        if(start) {
            if($('.circles').offset().top > $(window).scrollTop()) {
                setTimeout(function() {
                    
                    $('.li-link').each(function() {
                        var $this = $(this).find('.circle-link');
                        setTimeout(function() {
                            $this.animate({width: '150px', height:'150px', left:'0px', opacity: '0.5'}, 300, function() {
                                $this.css('display', 'block');
                            });
                        }, anime_start);
    
                        anime_start += 150;
                    });

                }, time);
            }
        }
        start = false;
    }

    show_circles();

    var animate_levels = true;
    function levels() {
        var time = 500;
        if(($('.chart-data').offset().top + $('.chart-data').height()) < ($(window).scrollTop() + $(window).height()) && animate_levels) {
            setTimeout(function() {
                $('.chart-data li').each(function() {
                    var $this = $(this);
                    var $height = $this.data('height');
                    $this.find('div').animate({height: $height + '%'}, time);
                    time += 200;
                });
            }, 300);
            animate_levels = false;
        }
    }

    levels();

    var about_start = true;
    function about_circles() {
        var time = 200;
        if(($('.about-circles').offset().top + $('.about-circles').height()) < ($(window).scrollTop() + $(window).height()) && about_start) {
            setTimeout(function() {
                $('.anime-circle').css( { transition: "transform 1.3s",
                transform:  "rotate(" + 1080 + "deg)" } );
                $('.circle div').each(function() {
                    var $this = $(this);
                        setTimeout(function() {
                            $this.animate({width: 100 + '%', height: 100 + '%'}, 500);
                        }, time);

                        time += 200;
                });
            }, 300);
            about_start = false;
        }  
    }

    about_circles();

    $(window).resize(function() {
        about_circles()
        top_nav_resize();
    });

    function top_nav_resize() {
        if(parseInt($('.wrapp-top-nav').css('top')) !== -10) {
            $('.wrapp-top-nav').css('top', '-' + $('.wrapp-top-nav').height() + 'px');
        }
    }

    $('.wrapp-top-nav').css('top', '-' + $('.wrapp-top-nav').height() + 'px');
    var anim_top_nav = true;

    function top_nav() {
        var top = $('.wrapp-top-nav').height();
        if($(window).scrollTop() > 200) {
            if(anim_top_nav) {
                $('.wrapp-top-nav').animate({top: '0px'}, 100).animate({top: '-15px'}, 50).animate({top: '-5px'}, 50).animate({top: '-10px'}, 50);
                anim_top_nav = false;
            } 
        }
        else {
            $('.wrapp-top-nav').stop().animate({top: '-' + top + 'px'}, 300);
            anim_top_nav = true;
        }
    }

    top_nav();

    $(window).scroll(function() {
        show_circles();
        levels();
        about_circles();
        top_nav();
    });

    $('.li-link').hover(function(e) {
        var $this = $(this);
       $this.find('.circle-link').animate({width: '190px', height: '190px', left: '-20px', top: '-20px'}, 150).animate({width: '180px', height: '180px', left: '-15px', top: '-15px'}, 50).animate({width:'185px', height:'185px', left: '-17.5px', top: '-17.5px'}, 50);
       $this.find('.arrow').stop(true, true).delay(250).animate({marginTop: 15 + 'px'}, 100);
    }, function() {
        $(this).find('.arrow').animate({marginTop: 0 + 'px'}, 200);
        $(this).find('.circle-link').animate({width: '150px', height: '150px', left: '0px', top: '0px'}, 200);
    });


    $('.read-more').hover(function() {
        $(this).find('.more').animate({width: '45px'}, 100).animate({width: '37px'}, 50).animate({width: '42px'}, 50).animate({width: '40px'}, 50);
    },
    function() {
        $(this).find('.more').animate({width: '0px'}, 250)
    });



    $('.abs-tumbnail').hover(function() {
        var $this = $(this).find('.anim-icon');
        $this.find('.borders').stop().animate({marginBottom: '0px', opacity: '1'}, 250, function() {
            $this.find('.arrow').animate({top: '11px', left: '29px', opacity:'1'}, 100);
        });
    }, function() {
        var $this = $(this).find('.anim-icon');
        $this.find('.borders').stop().animate({marginBottom: '-70px', opacity: '0'}, 300);
        $this.find('.arrow').stop().animate({top: '25px', left: '16px', opacity:'0'}, 300);
    });



    var move = 100;
    var move1 = 0;

    $('.movable-slides .slide').css('width', $('.container.content').width() + 'px');

    $(window).resize(function() {
        $('.movable-slides .slide').css('width', $('.container.content').width() + 'px');
    });

    function slider_html(elem) {
        var $html = "";
        var $height = $(window).height();
        elem.siblings('.imgs-container').find('img').each(function() {
            var $src = $(this).attr('src');
            $html += '<div class="slide"><div class="img-wrapp" style="background-image: url(' + $src + ');"></div></div>';
        });
        $('.movable-slides').html($html);
        $('.container.content').find('h1').text(elem.siblings('h2.d-none').text());
        $('.container.content').find('p').text(elem.siblings('p.d-none').text());
        $('.movable-slides .slide').css('width', $('.container.content').width() + 'px');
        $('.movable-slides .slide:first').addClass('active');
        $('.wrapp-points .points .point:first').find('a').addClass('active-point');
        $('.wrapper-slider').animate({height: $height + 'px'}, 1000, 'easeOutQuart', function() {
            $('.content').fadeIn(400);
        });

        $('.curent-num').html(($('.movable-slides .slide.active').index() + 1) + ' ' + 'of 6');

        $('.slide').bind('mousedown', function(e) {
            var $this = $(this);
            var start = e.pageX;
            var curent_left = parseInt($('.movable-slides').css('left'));
            var direction = 0;
            var move = 0;
            $('.slide').bind('mousemove', function(e) {
                direction = e.pageX - start;
                if((!$this.next().length) && direction < 0) {
                    move = curent_left + direction / 3;
                    $('.movable-slides').css('left', move + 'px');
                }
                else if(!($this.prev().length) && direction > 0) {
                    move = curent_left + direction / 3;
                    $('.movable-slides').css('left', move + 'px');
                }
                else {
                    move = curent_left + direction;
                    $('.movable-slides').css('left', move + 'px');
                }
            });
    
            $('.slide').bind('mouseup', function() {
                if(direction < 0) {
                    left_right('-');
                }
                else {
                    left_right('+');
                }
                $('.slide').unbind('mousemove');
                $('.slide').unbind('mouseup');
            });
        });
    }

    function left_right(lr) {
        if(lr == '-') {
            if($('.active').next().length) {
                $('.active').removeClass('active').next().addClass('active');
                move1+= move;
                $('.movable-slides').animate({left: '-' + move1 + '%'}, 500, function() {
                    $('.curent-num').html(($('.movable-slides .slide.active').index() + 1) + ' ' + 'of 6');
                    $('.active-point').removeClass('active-point').parents('.point').next('.point').find('a').addClass('active-point');
                });
            }
            else {
                $('.movable-slides').animate({left: '-' + 505 + '%'}, 200).animate({left: '-' + 500 + '%'}, 300);
            }
        }
        else if(lr == '+') {
            if($('.active').prev().length) {
                $('.active').removeClass('active').prev().addClass('active');
                move1-= move;
                $('.movable-slides').animate({left: '-' + move1 + '%'}, 500, function() {
                    $('.curent-num').html(($('.movable-slides .slide.active').index() + 1) + ' ' + 'of 6');
                    $('.active-point').removeClass('active-point').parents('.point').prev('.point').find('a').addClass('active-point');
                });
            }
            else {
                $('.movable-slides').animate({left: '5%'}, 200).animate({left: '0%'}, 300);
            }
        }
    }

    function points($eq) {
        $('.slide').eq($eq).addClass('active').siblings('.slide').removeClass('active');
            move1 = move * $eq;
        $('.movable-slides').animate({left: '-' + move1 + '%'}, 500, function() {
            $('.curent-num').html(($('.movable-slides .slide.active').index() + 1) + ' ' + 'of 6');
        });
    }

    $('.wrapp-points .points .point a').click(function() {
        $(this).addClass('active-point').parents('.point').siblings('.point').find('a').removeClass('active-point');
        var num = $(this).parents('.point').index();
        points(num);
    });

    function close() {
        $('.container.content').fadeOut(500);
        $('.wrapper-slider').animate({height: '0px'}, 1000, 'easeOutQuart');
        $('.movable-slides').html("");
        $('.movable-slides').css('left', '0px');
        move = 100;
        move1 = 0;
    }

$('.abs-tumbnail').click(function() {
    var $this = $(this);
    slider_html($this);
});

$('.read-more').click(function() {
    var $this = $(this).parents('.some-info').siblings('.some-tumbnail').find('.abs-tumbnail');
    slider_html($this);
});

$('.arrow-right').click(function() {
    var direction = '-';
    left_right(direction);
});

$('.arrow-left').click(function() {
    var direction = '+';
    left_right(direction);
});

$('.iks').click(function() {
    close();
});

$(window).resize(function() {
    if($('.wapper-slider').height() !== 0) {
        $('.wapper-slider').height($(window).height());
    }
});

$(document).scroll(function() {
    if($(this).scrollTop() > 800) {
       $('.footer .inner').css('display', 'block');
    }
    else {
        $('.footer .inner').css('display', 'none');
    }
});

});