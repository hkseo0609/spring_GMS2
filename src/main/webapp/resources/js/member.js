/**
 * member javascript 
 */
//ns(name space) 패턴
var app=app || {};

//app.path ---> ns 패턴 / ()(); ---> iife(이파이) 패턴
app.path=(function(){
	var init = function(ctx){
		app.session.init(ctx);
		//app.auth.init();
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
		
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getJsPath('js');
	};
	var img=function(){
		return app.session.getImgPath('img');
	};
	var css=function(){
		return app.session.getCssPath('css');
	};

	return {
		
		init:init,
		ctx:ctx,
		js:js,
		img:img,
		css:css
	}
	
})();

app.session=(function(){
	var init = function(ctx){
		sessionStorage.setItem('ctx', ctx);
		sessionStorage.setItem('js', '/resources/js');
		sessionStorage.setItem('img', '/resources/img');
		sessionStorage.setItem('css', '/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	
	return {
		'init' : init,
		'getPath' : getPath
	}
})();

app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	
		$('.list-group').children().addClass("list-group-item");
 		
		//member
 		$('.list-group-item a').eq(0).on('click',function(){
 			alert('0');
 			app.controller.moveTo('/member', '/add');
 		});
 		$('.list-group-item a').eq(1).on('click',function(){
 			alert('1');
 			app.controller.list('/member','/list','1');
 		});
 		$('.list-group-item a').eq(2).on('click',function(){
 			alert('2');
 			app.controller.detailStudent(prompt('조회할 id를 입력하세요.'));
 		});
 		$('.list-group-item a').eq(3).on('click',function(){
 			alert('3');
 			app.controller.moveTo('/member','/update');
 		});
 		
 		
 		//grade
 		$('.list-group-item a').eq(4).on('click',function(){
 			alert('4');
 			app.controller.moveTo('/grade', '/add');
 		});
 		$('.list-group-item a').eq(5).on('click',function(){
 			alert('5');
 			app.controller.list('/grade','/list','1');
 		});
 		$('.list-group-item a').eq(6).on('click',function(){
 			alert('6');
 			app.controller.detailStudent('/grade',prompt('조회할 id를 입력하세요.'));
 		});
 		$('.list-group-item a').eq(7).on('click',function(){
 			alert('7');
 			app.controller.moveTo('/grade','/update');
 		});
 		
 		
 		//board
 		$('.list-group-item a').eq(8).on('click',function(){
 			alert('8');
 			app.controller.moveTo('/board', '/write');
 		});
 		$('.list-group-item a').eq(9).on('click',function(){
 			alert('9');
 			app.controller.list('/board','/list','1');
 		});
 		
 		$('.list-group-item a').eq(10).on('click',function(){
 			alert('10');
 			app.controller.moveTo('/board', '/detail');
 		});

 		$('.list-group-item a').eq(11).on('click',function(){
 			alert('11');
 			app.controller.moveTo('/board','/update');
 		});
	};
	var setContentView=function(){
		//객체 앞에 $를 붙이면 컴포넌트 객체로 구분짓는 것 (값은 담는 임시 객체가 아닌)
		var $u1 = $("#main_ul_stu");
 		var $u2 = $("#main_ul_grade");
 		var $u3 = $("#main_ul_board");
 		
 		$u1.addClass("list-group");
 		$u2.addClass("list-group");
 		$u3.addClass("list-group");
 
	};
	return {
		init : init
	};
	
})();


app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		
	};
	var setContentView=function(){
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
 			app.controller.moveTo('/auth','/main');
 		});
 		$n5.on('click',function(){
 			alert('logout');
 			app.controller.logout();
 		});
 		
 		//member
 		$('.dropdown-menu a').eq(0).on('click',function(){
 			alert('0');
 			app.controller.moveTo('/member','/add');
 		});
 		$('.dropdown-menu a').eq(1).on('click',function(){
 			alert('1');
 			app.controller.list('/member','/list');
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
			app.controller.moveTo('/grade', '/add');
 		});
 		$('.dropdown-menu a').eq(5).on('click',function(){
 			alert('5');
			app.controller.list('/grade','/list','1');
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
			app.controller.moveTo('/board', '/write');
 		});
 		$('.dropdown-menu a').eq(9).on('click',function(){
 			alert('9');
			app.controller.list('/board','/list','1');
 		});
 		$('.dropdown-menu a').eq(10).on('click',function(){
 			alert('10');
			app.controller.moveTo('/board', '/detail');
 		});
 		$('.dropdown-menu a').eq(11).on('click',function(){
 			alert('11');
 			app.controller.deleteTarget('/board');
 		});
 
 		
	};
	return{
		init : init
	};
})();

app.auth=(function(){
	var init=function(){
		//이벤트 핸들러
		$('#loginBtn').on('click',function(){
			var input_id = $("#login_id").val();
			var input_pwd = $("#login_pwd").val();
			if($('#input_id').val()===""){
				alert("id를 입력해 주세요");
				return false;
			}
			if($('#input_pwd').val()===""){
				alert("pass를 입력해 주세요");
				return false;
			}
			$('#login_form').attr('action', app.path.ctx()+'/auth/login');
			$('#login_form').attr('method','get');
			return true;
		});
	};
	
	return {
		init:init
	};
})();


app.member=(function(){
	var init=function(){
		onCreate();
		
	};
	var onCreate=function(){
		
		$('#update_btn').on('click',function(){
			//id, phone, email, title
			sessionStorage.setItem('id', $("#detail_id").val());
			sessionStorage.setItem('name', $("#detail_name").text());
			sessionStorage.setItem('phone', $("#detail_phone").text());
			sessionStorage.setItem('email', $("#detail_email").text());
			sessionStorage.setItem('title', $("#update_title").text());
			controller.moveTo('member','member_update');
		});
		setContentView();
	};
	var setContentView=function(){
		
	};
	
	return {
		init : init
	};
})();


app.grade=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	
	return{
		init:init
	}
})();

app.board=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	}
})();



app.controller=(function(){
	var init=function(){
	};
	var moveTo=function(dir, page){
		location.href=app.path.ctx()+dir+page;
	};
	var list=function(dir, page, pageNum){
		location.href=app.path.ctx()+dir+page+'?pageNum='+pageNum;
	};
	var logout=function(){
		location.href=app.path.ctx()+'/auth/logout';
	};
	var deleteTarget=function(dir){
		window.prompt(dir+" ID?","");
		location.href=app.path.ctx()+dir+'/delete';
	};
	var updateStudent=function(id, email){
 		alert('update 진입');
 		location.href=app.path.ctx()+'/member/update?id='+id+'&email='+email;
 	};
	var deleteStudent=function(id){
 		alert('삭제할 id '+id);
 		location.href=app.path.ctx()+'/member/delete?id='+id;
 	};
	var detailStudent=function(dir, id){
 		alert('조회할 id '+id);
 		location.href=app.path.ctx()+dir+'/detail?id='+id;
 	};
	var findName=function(){
 		var findname = document.getElementById("findName").value;
 		alert('find_name: '+findname);
 		location.href=app.path.ctx()+'/member/search?findname='+findname;
 	};
	return {
		init : init,
		moveTo : moveTo,
		logout : logout,
		deleteTarget : deleteTarget,
		list : list,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		findName : findName
	};
})();