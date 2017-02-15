$(function(){
	$(window).scroll(function(){
        doAnimate();
    });
   function doAnimate(){
        var wT = $(window).scrollTop();
        var aT = wT + $(window).height();
        $('[data-animate]').each(function(){
            var obj = $(this);
            var tT = obj.offset().top;
            var a = obj.data('animate');
            if(tT > wT && tT < aT && !obj.hasClass(a)){
                obj.hide();
                if(obj.data('st') > 0){
                    setTimeout(function(){
                        obj.show().addClass(a+' animated');
                    },obj.data('st'));
                }else{
                    obj.show().addClass(a+' animated');
                }
            }
        });
    }
    doAnimate();
})
