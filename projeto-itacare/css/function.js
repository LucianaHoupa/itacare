$(window).scroll(function(){
		var header = $(window).scrollTop();
		if(header > 200){
            $('header').css("transition","1s");
			$('header').css("padding","0px 50px");
			$('header').css("border-bottom","4px solid rgba(0, 0, 0, 0.6)");
            $('header').animate('2000');
		} else {
            $('header').css("transition","1s");
            $('header').css("padding","20px 50px");
			$('header').css("border-bottom","0px");
    }
});