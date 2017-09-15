var meta=meta || {};

meta.common = (function(){
	var init = function(ctx){
		meta.session.init(ctx);
		meta.index.init();
		
	};
	var onCreate=function(){
		setContextView();
	};
	var setContextView=function(){
		
	};
	return {
		init : init
	};
})();

var $$ = function(){return meta.session.getPath('ctx');};
var js = function(){return meta.session.getPath('js');};
var img = function(){return meta.session.getPath('img');};
var css = function(){return meta.session.getPath('css');};

meta.session = (function(){
	var init = function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css');
	};
	var getPath = function(x){
		return sessionStorage.getItem(x);
	};
	
	return{
		init : init,
		getPath : getPath
	}
})();

meta.index = (function(){
	var $wrapper;
	var init = function(){
		onCreate();
	};
	var onCreate=function(){
		setContextView();
		$('#btn').on('click',function(){
			alert(' 개새끼야!@!!');
			$wrapper.empty();
		});
		
	};
	var setContextView=function(){
		//자바식으로 보면 set한것
		$wrapper = $('#wrapper');
		var $image = $('<img/>',
			{
				id:'loading',
				src:img()+'/loading.gif'
			}
		);
		$wrapper.append($image);
		//image.appendTo(wrapper);
		var $btn = $('<input/>', 
			{	
				type:'button',
				id:'btn',
				value:'버튼',
			}
		)
		$wrapper.append($btn);
	};
	return {init:init};
})();