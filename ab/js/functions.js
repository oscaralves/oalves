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
