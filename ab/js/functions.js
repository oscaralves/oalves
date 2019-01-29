function writeStyle(a){var b=inlineStyleContent.map(a=>a.id).indexOf(a.id),c="";-1===b?inlineStyleContent.push(a):inlineStyleContent[b]=a;for(let a of inlineStyleContent)c+="#"+a.id+"::-webkit-slider-runnable-track{background-size:"+a.percent+"% 100%} ";inlineStyle.textContent=c}var inlineStyle=document.createElement("style"),rangeSelector=document.querySelectorAll("[type=range]"),inlineStyleContent=new Array;document.body.appendChild(inlineStyle);var eventname=new Event("input");for(let a of rangeSelector)a.addEventListener("input",function(){let a=Number(this.getAttribute("max")-this.getAttribute("min")),b=(Number(this.value)+Math.abs(this.getAttribute("min")))/a*100;writeStyle({id:this.id,percent:b})},!1),a.dispatchEvent(eventname);

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });	
    }
}

$(function() {

    var dd = new DropDown( $('#languageModal') );

    $(document).click(function() {
        $('.languageModal').removeClass('active');
    });

});

$(function() {

    var dd = new DropDown( $('#suporteCatDrop') );

    $(document).click(function() {
        $('.suporteCatDrop').removeClass('active');
    });

});

$(document).ready( function(){
    
    /* OPEN FAQS ACCORDION */
            
    $('.supFaq table').click( function(){
        $(this).siblings('.faqContainer').fadeToggle();
        $(this).find('span').toggleClass('open');
    });
    
    /* BANNER COOKIES */
    
    $('#cookies #cookiesMain .cmHeader span').click( function(){
        $('#cookies #cookiesPreferences').fadeIn();
        $(this).addClass('open');
    });
    
    $('#cookies #cookiesMain button').click( function(){
        $('#cookies').fadeOut();
    });
    
    /* OPEN MENU MODAL */
    
    $('#btnMenuModal button').click( function(){
        $(this).toggleClass('is-active');
    });
    $('#menuModal').on("hide.bs.modal", function() {
        $('#btnMenuModal button').removeClass('is-active');
    })

    /* INPUT FOCUS - SEARCH MODAL */

    $('#searchModal').on('shown.bs.modal', function (e) {
        $('#searchInput').focus();
    });
    
});
