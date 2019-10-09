// CHECK VIEWPORT 

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() / 1.2;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.isInViewportDelay = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() / 2.1;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// HEADER ANIME SCROLL

function checkScroll(){
    if($(window).scrollTop() > 10){
        $('header').addClass('scrolled');
    }else{
        $('header').removeClass('scrolled');
    }
}

$(window).on('resize scroll', function(){
    
    var windowWidth = $(window).width();
    
    // RUN HEADER SCROLL FUNCTION DEPENDING ON WINDOW WIDTH
    
    if(windowWidth >= 992){
        checkScroll();
    }
    
    // STICKY MODULE
    
    if($('#sticky .content-right').isInViewportDelay()){
        $('#sticky .sticky h1').addClass('inactive');
    }else{
        $('#sticky .sticky h1').removeClass('inactive');
    }
    $('#sticky .content-right .cr-content').each( function(){
        var child = $(this).index() + 1;
        if($(this).isInViewportDelay()){
            if(windowWidth >= 768){
                $(this).addClass('active');
            }
            $('#sticky .sticky .sticky-icons i:nth-child(' + child +')').addClass('active');
        }else{
            if(windowWidth >= 768){
                $(this).removeClass('active');
            }
            $('#sticky .sticky .sticky-icons i:nth-child(' + child +')').removeClass('active');
        }
        if($(this).isInViewport()){
            if(windowWidth <= 767){
                $(this).addClass('active');
            }
        }
    });
    
});

$(document).ready( function(){
    
    var winWidth = $(window).width();
    
    // FOOTER DROPDOWNS
    
    if(winWidth <= 575){
        $('#ft-links h6').click( function(){
            $(this).next('nav').children('ul').fadeToggle();
        });
    }
    
    // STICKY MODULE
    
    if($('#sticky .content-right').isInViewportDelay()){
        $('#sticky .sticky h1').addClass('inactive');
    }else{
        $('#sticky .sticky h1').removeClass('inactive');
    }
    
    stickybits('.sticky');
    
    // RUN HEADER SCROLL FUNCTION DEPENDING ON WINDOW WIDTH
    
    if(winWidth >= 992){
        checkScroll();
    }
    
    /* OPEN MENU MODAL */
    
    $('#btn-menu').click( function(){
        $(this).toggleClass('is-active');
        $('header nav').fadeToggle();
    });
    
    // MAIN MENU DROPDOWNS
    
    if( winWidth >= 992){
        $('header li.dropdown').mouseenter( function(){
            $(this).children('ul').fadeIn();
            $(this).addClass('hover');
        });
        $('header li.dropdown').mouseleave( function(){
            $(this).children('ul').fadeOut();
            $(this).removeClass('hover');
        });
    }
    if( winWidth <= 991){
        $('header li.dropdown').click( function(){
            $(this).children('ul').fadeToggle();
            $(this).toggleClass('open');
        });
    }
    
    // EQUALIZE CARDS HEIGHT
    
    if( winWidth >= 768){
        var cardHeight = 0;
        $('.card-block').each(function(){
           if ($(this).height() > cardHeight) { cardHeight = $(this).height(); }
        });
        $('.card-block').height(cardHeight);
    }
    
    // INIT ACCORDION
    
    $(function(){
        $('.accordion').accordion({
            collapsible: true,
            heightStyle: "content",
            active : 'none'
        });
    });
    
    $('.accordion h6').click(function(){
        $('.accordion h6 div').removeClass('opened');
        if($(this).hasClass('ui-accordion-header-active')){
            $(this).children('div').removeClass('opened');
        }else{
            $(this).children('div').addClass('opened');
        }
    });
    
});

