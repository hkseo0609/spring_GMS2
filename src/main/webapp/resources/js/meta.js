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

meta.ui=(function(){
	var $wrapper, $navbar, $container, ctx, img, css, js;
	var init = function(){
		$wrapper = $('#wrapper');
		$navbar = $('#navbar');
		$container = $('#container');
		img=$$('i');
	};
	var navbar = function(){
		$('#navbar').html(
		'<nav class="navbar navbar-inverse"> '
		+' <div class="container-fluid"> ' 
		+'    <div class="navbar-header"> '
		+'      <a class="navbar-brand" href="#">HEEKYOUNG</a> '
		+'    </div> '
		+'    <ul class="nav navbar-nav"> '
		+'      <li id="home"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li> '
		+'      <li class="dropdown"> '
		+'      	<a href="#" class="dropdown-toggle" '
		+'      	data-toggle="dropdown" role="button" '
		+'      	aria-haspopup="true" '
		+'      	aria-expanded="false">학생관리<span class="caret"></span></a> '
		+'      	<ul id="nav_stu" class="dropdown-menu"> '
		+'	      	<li><a>학생 추가</a></li> '
		+'	      	<li><a>학생 목록</a></li> '
		+'	      	<li><a>학생 조회</a></li> '
		+'	      	<li></li> '
		+'	      	<li><a>학생 삭제</a></li> '
		+'      	</ul> '
		+'  	 </li> '
		+'  	 <li class="dropdown"> '
		+'      	<a href="#" class="dropdown-toggle" '
		+'      	data-toggle="dropdown" role="button" '
		+'      	aria-haspopup="true" '
		+'      	aria-expanded="false">성적관리<span class="caret"></span></a> '
		+'      	<ul id="nav_grade" class="dropdown-menu"> '
		+'	      	<li><a>성적 추가</a></li> '
		+'	      	<li><a>성적 상제</a></li> '
		+'	      	<li><a>성적 목록</a></li> '
		+'	      	<li></li> '
		+'	      	<li><a>성적 삭제</a></li> '
		+'      	</ul> '
		+'   	 </li> '
		+'   	 <li class="dropdown"> '
		+'      	<a href="#" class="dropdown-toggle" '
		+'     	data-toggle="dropdown" role="button" '
		+'      	aria-haspopup="true" '
		+'     	aria-expanded="false">게시판관리<span class="caret"></span></a> '
		+'      	<ul id="nav_board" class="dropdown-menu"> '
		+'	      	<li><a>게시글 추가</a></li> '
		+'	      	<li><a>게시글 목록</a></li> '
		+'	      	<li><a>게시글 조회</a></li> '
		+'	      	<li></li> '
		+'	      	<li><a>게시글 삭제</a></li> '
		+'      	</ul> '
		+'   	 </li> '
		+'   	 <li class="dropdown"> '
		+'      	<a href="#" class="dropdown-toggle" '
		+'     	data-toggle="dropdown" role="button" '
		+'      	aria-haspopup="true" '
		+'     	aria-expanded="false">수 열<span class="caret"></span></a> '
		+'      	<ul id="nav_algo" class="dropdown-menu"> '
		+'	      	<li><a id="arithBtn">등차수열</a></li> '
		+'	      	<li><a id="swBtn">스위치수열</a></li> '
		+'	      	<li><a id="geoBtn">계차수열</a></li> '
		+'	      	<li><a id="facBtn">팩토리얼</a></li> '
		+'	      	<li><a id="fiboBtn">피보나치</a></li> '
		+'      	</ul> '
		+'   	 </li> '
		+'   	 </ul> '
		+'    <span class="login-d">${user.name}&nbsp;<a id="logout">로그아웃</a> </span> '
		+'  </div> '
		+'</nav> ');
		
	};
	var arithmetic=function(){
		var content= '<div id="content">'
			+'<h1>1부터 100까지 등차수열의 합</h1>'
			+'<br />'
			+'<label id="start_num">시작값:</label>'
			+'<br />'
			+'<label id="end_num">끝날값:</label>'
			+'<br />'
			+'<label id="result"></label>'
			+'</div>';
		
		$('#container').append(content);
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

	};
	

	return {init:init,
		navbar:navbar,
		arithmetic:arithmetic
		}
})();

meta.algo={
		algorithm : ()=>{
			
			var sum = 0;
			for(var i=1;i<=100;i++){
				sum = sum+i;
			}			
			return sum;
		},
		
		/*switchSeries : function(s,e){
			var i=s*1, j=e*1, sum=0, sw=0;
			if(s%2==0){
				sw=1;
			}else{
				sw=0;
			};
			do {
				if(sw==0){
					sum=sum+i;
					sw=1;
				}else {
					sum=sum-i;
					sw=0;
				}
				i=i+1;
				
			}while(i<=j);
			
			return sum;
		}*/
		switchSeries : ()=>{
			var i=0, sum=0, sw=0;
			
			do {
				if(sw==0){
					sum=sum+i;
					sw=1;
				}else {
					sum=sum-i;
					sw=0;
				}
				i=i+1;
				
			}while(i<100);
			
			return sum;
			
		},
		
		geoSeries :(e)=>{
			var sum = 0;
			var x=e*1;
			var y=1;
			for(var i=0;i<x;i++){
				sum = sum+y;
				y = y+(i+1);
			}			
			return sum;
		},
		
		facSerise :()=>{
			var sum = 0;
			var j=1;
			for(var i=0;i<10;i++){
				j=j*(i+1);
				sum=sum+j;
			}			
			return sum;
		},
		
		fiboSerise :()=>{
			var a=1, b=1;
			var sum=2;
			var c=0;
			for(var i=2;i<20;i++){
				c=a+b;
				sum=sum+c;
				a=b;
				b=c;
			}			
			return sum;
		}
		
};

meta.auth = (function(){
	var $wrapper, ctx, img, js, css;
	var init = function(){
		onCreate();
	};
	var onCreate = function(){
		setContextView();
	};
	var setContextView=function(){
		$wrapper = $('#wrapper');
		img = $$('i');
		loginView();
	};
	var loginView = function(){
		var ui =
		'<img src="'+img+'/login.gif" style="margin: 0 auto;"></div>'
		+'<br />'
		+'<div id="container">'
		+'<fieldset>'
		+'<legend>로그인</legend>'
		+	'<span class="login-span">ID</span>'
		+	'<input type="text" id="login_id" name="id" value="kang" /><br />'
		+	'<label>PASSWORD</label><input type="password" id="login_pwd" name="pwd" value="1234"/><br />'
		+	'<mark style="font-size: 13px"> *ID는 숫자 포함 8글자 이내*</mark><br />'
		+	'<input type="hidden" name="action" value="login" />'
		+	'<input type="hidden" name="page" value="main" />'
		+'</fieldset>'
		+'</div>';
		
		$wrapper.append(ui);
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
	};
	
	return{
		init:init
	};
	
})();



meta.index = (function(){
	var $wrapper, $navbar, $container, ctx, css, img, js;
	var init = function(){
		onCreate();
		meta.ui.init();
	};
	var onCreate=function(){
		setContextView();
		$('#btn').on('click',function(){
			alert(' 개새끼야!@!!');
			$container.empty();
			//meta.auth.init();
			meta.ui.navbar();
			meta.ui.arithmetic();
			$('#arithBtn').on('click',function(){
				alert('등차수열 클릭');
				$('#container').empty();
				meta.ui.arithmetic();
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#cal_btn').on('click',function(){
					$('#result').text('결과값 ====>'+meta.algo.algorithm());
				});
				
			});
			$('#swBtn').on('click',function(){
				alert('스위치 클릭');
				$('#container').empty();
				meta.ui.arithmetic();
				$('h1').html('스위치 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$('#result').text('결과값 ====>'+meta.algo.switchSeries());
				});
			});
			$('#geoBtn').on('click',function(){
				alert('계차수열 클릭');
				$('#container').empty();
				meta.ui.arithmetic();
				$('h1').html('계차 수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$('#result').text('결과값 ====>'+meta.algo.geoSeries($('#end').val()));
				});
			});
			$('#facBtn').on('click',function(){
				alert('팩토리얼 클릭');
				$('#container').empty();
				meta.ui.arithmetic();
				$('h1').html('팩토리얼');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('10').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$('#result').text('결과값 ====>'+meta.algo.facSerise());
				});
			});
			$('#fiboBtn').on('click',function(){
				alert('피보나치 클릭');
				$('#container').empty();
				meta.ui.arithmetic();
				$('h1').html('피보나치 수열');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('20').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$('#result').text('결과값 ====>'+meta.algo.fiboSerise());
				});
			});
			
			
		
		});
		
	};
	var setContextView=function(){
		//자바식으로 보면 set한것
		$container = $('#container');
		var $image = $('<img/>',
			{
				id:'loading',
				src:$$('i')+'/loading.gif'
			}
		);
		$container.append($image);
		//image.appendTo(wrapper);
		var $btn = $('<input/>', 
			{	
				type:'button',
				id:'btn',
				value:'버튼',
			}
		)
		$container.append($btn);
	};
	return {init:init};
})();