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

meta.session = {
	init : function(ctx){
		sessionStorage.setItem('x',ctx);
		sessionStorage.setItem('j',ctx+'/resources/js');
		sessionStorage.setItem('i',ctx+'/resources/img');
		sessionStorage.setItem('c',ctx+'/resources/css');
	},
	getPath : function(x){
		return sessionStorage.getItem(x);
	}
};


var $$ = function(x){return meta.session.getPath(x);};

//매소드들끼리 공유하는 값이 없으면 이렇게(객체 literal 방식<->함수 literal 방식) 만들어서 써라
meta.comp = {
		input : function(json){ return  $('<input/>',json); }
};

meta.index = (function(){
	var $wrapper, $navbar, $container, 
		ctx, css, img, js, algo, temp;
	var init = function(){
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/templet.js';
		//meta.auth.init();
		onCreate();
	};
	var onCreate=function(){
		$container = $('#container');
		img=$$('i');
		$.getScript(temp,x=>{
			var $image = $('<img/>',
					intro.loading(img)
			);
		
			$container.append($image);
			var $btn = $('<input/>', 
					intro.intBtn()
			);
			$('#loading').after($btn);

			$('#btn').click(()=>{
				alert(' 개새끼야!@!!');
				$container.empty();
				//meta.ui.init();
				meta.navbar.init();
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.arithSeries());
					});
				});
			});
		});
	};
	return {init:init};
})();

meta.navbar=(function(){
	var $wrapper, $navbar, $container, 
	ctx, img, css, jS, temp, algo;
	var init = function(){
		$wrapper = $('#wrapper');
		$navbar = $('#navbar');
		$container = $('#container');
		img=$$('i');
		js=$$('j');
		temp=js+'/templet.js';
		algo=js+'/algo.js';
		onCreate();
	};
	var onCreate=function(){
		//setContentView();
		$.getScript(temp, ()=>{
			$navbar.html(intro.nav());
			var $series = $(algoUI.series());
			$container.append($series);
			
			var $start = compUI.input('start','text','');
			var $end = compUI.input('end','text','');
			var $cal_btn = compUI.input('cal_btn','button','계산하기');
			$('#start_num').after($start);
			$('#end_num').after($end);
			$end.after($cal_btn);
			
			var $n1 = $("#nav_stu");
	 		var $n2 = $("#nav_grade");
	 		var $n3 = $("#nav_board");
	 		var $n4 = $("#home");
	 		var $n5 = $("#logout");
	 		
	 		$n1.addClass('dropdown-menu');
	 		$n2.addClass('dropdown-menu');
	 		$n3.addClass('dropdown-menu');
	 		$n4.addClass("active");

			$('.active a').on('click',function(){
	 			alert('home');
	 			app.controller.moveTo('common','main');
	 		});
	 		$n5.on('click',function(){
	 			alert('logout');
	 			app.controller.logout();
	 		});
	 		
	 		//member
	 		$('.dropdown-menu a').eq(0).on('click',function(){
	 			alert('0');
	 			app.controller.moveTo('member','member_add');
	 		});
	 		$('.dropdown-menu a').eq(1).on('click',function(){
	 			alert('1');
	 			app.controller.list('1');
	 		});
	 		$('.dropdown-menu a').eq(2).on('click',function(){
	 			
	 			app.controller.detailStudent('/member', prompt('조회할 id를 입력하세요.'));
	 		});
	 		$('.dropdown-menu a').eq(3).on('click',function(){
	 			alert('2');
	 			app.controller.deleteTarget('/member');
	 		});
	 		
	 		//grade
	 		$('.dropdown-menu a').eq(4).on('click',function(){
	 			alert('4');
				app.controller.moveTo('grade', 'grade_add');
	 		});
	 		$('.dropdown-menu a').eq(5).on('click',function(){
	 			alert('5');
				app.controller.moveTo('grade', 'grade_list');
	 		});
	 		$('.dropdown-menu a').eq(6).on('click',function(){
	 			alert('6');
				app.controller.detailStudent('/grade',prompt('조회할 id를 입력하세요.'));
	 		});
	 		$('.dropdown-menu a').eq(7).on('click',function(){
	 			alert('7');
	 			app.controller.deleteTarget('/grade');
	 		});
	 		
	 		//board
	 		$('.dropdown-menu a').eq(8).on('click',function(){
	 			alert('8');
				app.controller.moveTo('board', 'board_write');
	 		});
	 		$('.dropdown-menu a').eq(9).on('click',function(){
	 			alert('9');
				app.controller.moveTo('board', 'board_list');
	 		});
	 		$('.dropdown-menu a').eq(10).on('click',function(){
	 			alert('10');
				app.controller.moveTo('board', 'board_detail');
	 		});
	 		$('.dropdown-menu a').eq(11).on('click',function(){
	 			alert('11');
	 			app.controller.deleteTarget('/board');
	 		});
	 	
	 		$('#arithBtn').click(()=>{
				alert('등차수열 클릭');
				$('#result').text('');
				$('h1').html('스위치 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.arithSeries());
					});
				});
				
			});
	 		
	 		$('#swBtn').click(()=>{
	 			alert('스위치 클릭');
	 			$('#result').text('');
				$('h1').html('스위치 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.switchSeries());
					});
				});
	 		});

			$('#geoBtn').click(()=>{
				alert('계차수열 클릭');
				$('#result').text('');
				$('h1').html('계차 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.diffSeries($('#end').val()));
					});
				});
			});
			$('#facBtn').click(()=>{
				alert('팩토리얼 클릭');
				$('#result').text('');
				$('h1').html('팩토리얼');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('10').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.facSeries());
					});
				});
			});
			$('#fiboBtn').click(()=>{
				alert('피보나치 클릭');
				$('#result').text('');
				$('h1').html('피보나치 수열');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('20').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.fiboSeries());
					});
				});
			});
		});

		
	};
	return{
		init : init
	};
})();

/*meta.ui=(function(){
	var $wrapper, $navbar, $container, 
		ctx, img, css, jS, temp;
	var init = function(){
		$wrapper = $('#wrapper');
		$navbar = $('#navbar');
		$container = $('#container');
		img=$$('i');
		js=$$('j');
		temp=js+'/templet.js';
		onCreate();
	};
	var onCreate=function(){
		$.getScript(temp, ()=>{
			$navbar.html(intro.nav());
			var $series = $(algo.series());
			$('#container').append($series);
			$('#start_num').after(meta.comp.input(
					{type:'text',
					id:'start'
					}));
			$('#end_num').after(meta.comp.input(
					{type:'text',
					id:'end'
					}));
			$('#end').after(meta.comp.input(
					{type:'button',
					id:'cal_btn',
					value:'계산'
					}));
		});
	};
	return {init:init}
})();*/

meta.auth = (function(){
	var $wrapper, ctx, img, js, css, temp;
	var init = function(){
		js=$$('j');
		temp=js+'/templet.js';
		onCreate();
	};
	var onCreate = function(){
		setContextView();
	};
	var setContextView=function(){
		$wrapper = $('#wrapper');
		img = $$('i');
		//loginView();
		$.getScript(temp,x=>{
			var $ui = $(intro.loginView(img));
			$wrapper.append($ui);
			$('#container').append(meta.comp.input(
				{type:'button',
				id:'login_btn',
				value:'로그인'}		
			));
			$('#container').append(meta.comp.input(
				{type:'button',
				id:'cancle_btn',
				value:'취소'}		
			));
		});
	};
	return{
		init:init
	};
	
})();



