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
		ctx=$$('x');
		algo=js+'/algo.js';
		temp=js+'/templet.js';
		onCreate();
	};
	var onCreate=function(){
		$container = $('#container');
		img=$$('i');
		$.getScript(temp,()=>{
			compUI.div('content').css({'margin':'0 auto','width':'80%', 'margin-top':'100px'}).appendTo($container);
			
			var $image = $('<img/>',intro.loading(img));
			$image.css({'margin':'0 auto'});
			$('#content').append($image);
			var $btn = $('<input/>', 
					intro.intBtn()
			);
			$('#loading').after(compUI.h3('h-btn'));
			$('#h-btn').append(compUI.span('btn')).attr('display','inline');
			
			compUI.span('btn')
				.html('알고리즘')
				.addClass('label label-warning')
				.css({'margin':'0 auto'})
				.appendTo('#h-btn')
				.click(()=>{
					alert(' 개새끼야!@!!');
					$container.empty();
					meta.navbar.init();
					$('#start').val('1').attr('readonly','true');
					$('#end').val('100').attr('readonly','true');
					$('#cal_btn').click(()=>{
						$.getScript(algo,()=>{
							$('#result').text('결과값 ====>'+series.arithSeries());
						});
					});
				});
			
			compUI.span('btn2')
				.html('게시판가기')
				.addClass('label label-success')
				.css({'margin-left':'10px'})
				.appendTo('#h-btn')
				.click(()=>{
					meta.board.list();
				});
			
			compUI.span('btn3')
				.html('회원관리')
				.addClass('label label-danger')
				.css({'margin-left':'10px'})
				.appendTo('#h-btn')
				.click(()=>{
					alert('회원관리');
				});

		});
			/*$('#h-btn').append(compUI.span('btn2')).attr('dispaly', 'inline');
			$('#btn2').html('버튼이').addClass('label label-primary').css({'margin-left':'10px'});
			$('#h-btn').append(compUI.span('btn3')).attr('dispaly', 'inline');
			$('#btn3').html('홈으로').addClass('label label-success').css({'margin-left':'10px'});
			$('#h-btn').append(compUI.span('btn4')).attr('dispaly', 'inline');
			$('#btn4').html('들어가는').addClass('label label-info').css({'margin-left':'10px'});
			$('#h-btn').append(compUI.span('btn5')).attr('dispaly', 'inline');
			$('#btn5').html('버튼').addClass('label label-warning').css({'margin-left':'10px'});
			$('#h-btn').append(compUI.span('btn6')).attr('dispaly', 'inline');
			$('#btn6').html('일까요?').addClass('label label-danger').css({'margin-left':'10px'});*/
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
	 		
	 		/*var $series = $(algoUI.series());
	 		$container.html($series);
			var $start = compUI.input('start','text','');
			var $end = compUI.input('end','text','');
			var $cal_btn = compUI.input('cal_btn','button','계산하기');
			$('#start_num').after($start);
			$('#end_num').after($end);
			$end.after($cal_btn);*/
	 	
	 		$('#arithBtn').click(()=>{
				alert('등차수열 클릭');
				var $series = $(algoUI.series());
				$container.html($series);
				$('#result').text('');
				$('h1').html('등차 수열의 합');
				var $start = compUI.input('start','text','');
				var $end = compUI.input('end','text','');
				var $cal_btn = compUI.input('cal_btn','button','계산하기');
				$('#start_num').after($start);
				$('#end_num').after($end);
				$end.after($cal_btn);
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
	 			var $series = $(algoUI.series());
				$container.html($series);
	 			$('#result').text('');
				$('h1').html('스위치 수열의 합');
				var $start = compUI.input('start','text','');
				var $end = compUI.input('end','text','');
				var $cal_btn = compUI.input('cal_btn','button','계산하기');
				$('#start_num').after($start);
				$('#end_num').after($end);
				$end.after($cal_btn);
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
				var $series = $(algoUI.series());
				$container.html($series);
				$('#result').text('');
				$('h1').html('계차 수열의 합');
				var $start = compUI.input('start','text','');
				var $end = compUI.input('end','text','');
				var $cal_btn = compUI.input('cal_btn','button','계산하기');
				$('#start_num').after($start);
				$('#end_num').after($end);
				$end.after($cal_btn);
				$('#start').val('1').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.diffSeries($('#end').val()));
					});
				});
			});
			$('#facBtn').click(()=>{
				alert('팩토리얼 클릭');
				var $series = $(algoUI.series());
				$container.html($series);
				$('#result').text('');
				$('h1').html('팩토리얼');
				var $start = compUI.input('start','text','');
				var $end = compUI.input('end','text','');
				var $cal_btn = compUI.input('cal_btn','button','계산하기');
				$('#start_num').after($start);
				$('#end_num').after($end);
				$end.after($cal_btn);
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
				var $series = $(algoUI.series());
				$container.html($series);
				$('#result').text('');
				$('h1').html('피보나치 수열');
				var $start = compUI.input('start','text','');
				var $end = compUI.input('end','text','');
				var $cal_btn = compUI.input('cal_btn','button','계산하기');
				$('#start_num').after($start);
				$('#end_num').after($end);
				$end.after($cal_btn);
				$('#start').val('1').attr('readonly','true');
				$('#end').val('20').attr('readonly','true');
				$('#cal_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값 ====>'+series.fiboSeries());
					});
				});
			});
			
			$('#selBtn').click(()=>{
				alert('선택정렬 클릭');
				$container.empty();
				var arr = new Array();
				var $sort = $(algoUI.sort());
				$container.html($sort);
				var $insert = compUI.input('insert','text','');
				var $sort_btn = compUI.input('sort_btn','button','입력하기').css({'margin-left':'10px'});
				$('#insert_num').after($insert);
				$insert.after($sort_btn);
				
				var i=0;
				$('#sort_btn').click(()=>{
					arr.push($('#insert').val()*1);
					$('#insert').val('');
					i++;
					if(i==5){
						var $re_btn = compUI.input('re_btn','button','결과').css({'margin-left':'10px'});
						$sort_btn.after($re_btn);
						$('#re_btn').click(()=>{
							$.getScript(algo,()=>{
								$('#score').text('입력값 ====>'+arr);
								$('#result').text('결과값 ====>'+sort.selection(arr));
							});
						});
					};
				});
				
			});
			
			$('#bubbleBtn').click(()=>{
				alert('버블정렬 클릭');
				$container.empty();
				var arr = new Array();
				var $sort = $(algoUI.sort());
				$container.html($sort);
				$('h1').html('버블정렬 bubble');
				var $insert = compUI.input('insert','text','');
				var $sort_btn = compUI.input('sort_btn','button','입력하기').css({'margin-left':'10px'});
				$('#insert_num').after($insert);
				$insert.after($sort_btn);
				
				var i=0;
				$('#sort_btn').click(()=>{
					arr.push($('#insert').val()*1);
					$('#insert').val('');
					i++;
					if(i==5){
						var $re_btn = compUI.input('re_btn','button','결과').css({'margin-left':'10px'});
						$sort_btn.after($re_btn);
						$('#re_btn').click(()=>{
							$.getScript(algo,()=>{
								$('#score').text('입력값 ====>'+arr);
								$('#result').text('결과값 ====>'+sort.selection(arr));
							});
						});
					};
					
				});
				
			});
			
			$('#insertBtn').click(()=>{
				alert('삽입정렬 클릭');
				$container.empty();
				var arr = new Array();
				var $sort = $(algoUI.sort());
				$container.html($sort);
				$('h1').html('삽입정렬 insertion');
				var $insert = compUI.input('insert','text','');
				var $sort_btn = compUI.input('sort_btn','button','입력하기').css({'margin-left':'10px'});
				$('#insert_num').after($insert);
				$insert.after($sort_btn);
				var i=0;
				$('#sort_btn').click(()=>{
					arr.push($('#insert').val()*1);
					$('#insert').val('');
					i++;
					if(i==5){
						var $re_btn = compUI.input('re_btn','button','결과').css({'margin-left':'10px'});
						$sort_btn.after($re_btn);
						$('#re_btn').click(()=>{
							$.getScript(algo,()=>{
								$('#score').text('입력값 ====>'+arr);
								$('#result').text('결과값 ====>'+sort.insertion(arr));
							});
						});
					};
				});
				
			});
			
			$('#rankBtn').click(()=>{
				alert('석차구하기 클릭');
				$container.empty();
				var arr = new Array();
				var $sort = $(algoUI.sort());
				$container.html($sort);
				$('h1').html('석차구하기 ranking');
				var $insert = compUI.input('insert','text','');
				var $sort_btn = compUI.input('sort_btn','button','입력하기').css({'margin-left':'10px'});
				$('#insert_num').after($insert);
				$insert.after($sort_btn);
				
				var i=0;
				$('#sort_btn').click(()=>{
					arr.push($('#insert').val()*1);
					$('#insert').val('');
					i++;
					if(i==5){
						var $re_btn = compUI.input('re_btn','button','결과').css({'margin-left':'10px'});
						$sort_btn.after($re_btn);
						$('#re_btn').click(()=>{
							$.getScript(algo,()=>{
								$('#score').text('입력 점수 ====>'+arr);
								$('#result').text('석차 등수 ====>'+sort.ranking(arr));
							});
						});
					};
				});
				
			});
			
		});

		
	};
	return{
		init : init
	};
})();

meta.board=(function(){
	var ctx, js, temp, $container;
	var init = ()=>{		
		js=$$('j');
		ctx=$$('x');
		temp=js+'/templet.js';	
		$container = $('#container');
	};
	var write = (x)=>{
		alert('글쓰기 진입');
		init();
		$.getScript(temp,()=>{
			$container.html(bbsUI.detail());
		});
	};
	var list = (x)=>{
		alert('글쓰기 진입');
		init();
		$.getJSON(ctx+'/list/articles/board',data=>{
			//alert('x msg is '+x.msg);
			$container.empty().css({'margin':'0 auto','width':'80%', 'margin-top':'50px'});
			$container.html(bbsUI.search());
			$('#count').append(data.total.count);
			var tbl = bbsUI.tblTwo();
			var forTr;
			$.each(data.list,function(i,j){
				forTr += '<tr style="height:25px;">'
				+'<td>'+j.articleSeq+'</td>'
				+'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
				+'<td>'+j.content+'</td>'
				+'<td>'+j.id+'</td>'
				+'<td>'+j.regdate+'</td>'
				+'<td style="text-align: center;">'+j.hitcount+'</td>'
			+'</tr>';
			}); 
			console.log('tr: '+forTr);
			$container.append(tbl);
			$('#modal').empty();
			$('#tbody').html(forTr);
			$container.append(bbsUI.page());
			$('#write').click(e=>{
				meta.board.write();
			});
			
		
		});
	};
	var detail = (x)=>{
		alert('선택한 시퀀스 : '+x);
	    init(); 
	   $.getScript(temp,()=>{
		   	$container.empty();
			compUI.div('content').css({'margin': 'auto', 'width': '100%'}).appendTo($container);
		    $('#content').html(bbsUI.detail());
		    $('legend').html('게시글 보기');
		    	
			   $.getJSON(ctx +'/get/board/'+x, data=>{
			    	$('#fname').val(data.detail.title);
		            $('#lname').val(data.detail.id);
		            $('#lregdate').val(data.detail.regdate);
		            $('#message').val(data.detail.content);
		         
			    });
			   $('#btn1').html('수 정').click( e =>{
			       e.preventDefault(); //submit 기능을 막음
			       $('legend').html('게시글 수정');
		           $('#btn1').html('수정완료')
		           		.attr('id','updateBtn')
		           		.click( e =>{
		           			e.preventDefault();
		    		     	var _title = $('#fname').val();
		    		     	var _writer = $('#lname').val();
		    		     	var _message = $('#message').val();
		            		$.ajax({
		            			url:ctx +'/put/board',
		            			method:'post',
		            			data : JSON.stringify({
		            				'articleSeq':x,
		            				'title':_title,
		            				'id':_writer,
		            				'content':_message
		            			}),
		            			contentType : 'application/json',
		            			success : d=>{
		            				alert('ajax 통신 성공'+d.update);
		            				meta.board.detail(d.update);
		            			},
		            			error : (x,s,m)=>{
		            				alert('글 수정시 에러 발생'+m);
		            			}
		            		});
		            	});
		            $('#btn2').html('취 소')
		            	.attr('id','resetBtn')
		            	.attr('type','reset')
		            	.removeAttr('data-toggle')
		            	.removeAttr('data-target');
			    });
			   
			    $('#btn2')
			    	.attr('data-toggle','modal')
			    	.attr('data-target','#modal')
			    	.addClass('btn btn-primary')
			    	.html('삭 제')
			    	.click(e=>{
				       e.preventDefault();
				       $('#confirmBtn').click(e=>{
				    	   e.preventDefault();
					       boardDelete({
								'articleSeq':x,
								'pwd':$('#userPwd').val(),
								'id': $('#lname').val()
							});
				    	});
			    	});
		});
	};
	
	var update = (x)=>{
		alert('업데이트 시퀀스 : '+x);
		 var url = ctx + '/get/board/'+x;
	      $.getJSON(url, data=>{
	         $.getScript(temp,()=>{
	            compUI.div('content').css({'margin': 'auto', 'width': '100%'}).appendTo($container);
	            $('#content').html(boardUI.detail());
	            $('legend').html('게시글 수정');
	            $('#btn1').html('수 정').click( e =>{
	               e.preventDefault(); //submit 기능을 막음
	               update(x);
	            });
	            $('#btn2').html('삭 제').click( e=>{
	               e.preventDefault(); //submit 기능을 막음
	               deleteArticle(x);
	            });
	           });
	      });
	};
	
	var boardDelete = (y)=>{
		init();
		$.ajax({
			url:ctx +'/delete/board',
			method:'post',
			data : JSON.stringify(y),
			contentType : 'application/json',
			success : d=>{
				alert(d.msg);
				if(d.msg==="success"){
					alert("글삭제 성공");
					list();
				}else{
					alert("글삭제 실패! 비밀번호가 다릅니다.");
					
				}
			},
			error : (x,s,m)=>{
				alert('글 수정시 에러 발생'+m);
			}
		});
	};
	
	return {
		list:list,
		detail:detail,
		write:write,
		update:update,
		boardDelete:boardDelete};
	
})();

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



