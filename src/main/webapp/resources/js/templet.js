var intro={
	loading : (x)=>{
		return {
			id:'loading',
			src:x+'/loading.gif'
		}
	},
	intBtn : ()=>{
		return {	
			type:'button',
			id:'btn',
			value:'버튼',
		}
	},
	loginView : (x)=>{
		return '<img src="'+x+'/login.gif" style="margin: 0 auto;"></div>'
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
	},
	nav : ()=>{
		return '<nav class="navbar navbar-inverse"> '
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
		+'  	<li class="dropdown"> '
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
		+'   	<li class="dropdown"> '
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
		+'   	<li class="dropdown"> '
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
		+'		<li class="dropdown"> '
		+'      	<a href="#" class="dropdown-toggle" '
		+'     	data-toggle="dropdown" role="button" '
		+'      	aria-haspopup="true" '
		+'     	aria-expanded="false">배 열<span class="caret"></span></a> '
		+'      	<ul id="nav_algo" class="dropdown-menu"> '
		+'	      	<li><a id="selBtn">선택정렬</a></li> '
		+'	      	<li><a id="bubbleBtn">버블정렬</a></li> '
		+'	      	<li><a id="insertBtn">삽입정렬</a></li> '
		+'	      	<li><a id="rankBtn">석차구하기</a></li> '
		+'	      	<li><a id="binBtn">이분검색</a></li> '
		+'	      	<li><a id="mergeBtn">병합</a></li> '
		+'	      	<li><a id="stackBtn">스택</a></li> '
		+'      	</ul> '
		+'   	 </li> '
		+'		<li class="dropdown"> '
		+'      	<a href="#" class="dropdown-toggle" '
		+'     	data-toggle="dropdown" role="button" '
		+'      	aria-haspopup="true" '
		+'     	aria-expanded="false">행  열<span class="caret"></span></a> '
		+'      	<ul id="nav_algo" class="dropdown-menu"> '
		+'	      	<li><a id="selBtn">기본 5행 5열</a></li> '
		+'	      	<li><a id="bubbleBtn">직각삼각형</a></li> '
		+'	      	<li><a id="insertBtn">지그재그</a></li> '
		+'	      	<li><a id="rankBtn">다이아몬드</a></li> '
		+'	      	<li><a id="binBtn">모래시계</a></li> '
		+'	      	<li><a id="mergeBtn">오른쪽 빈삼각형</a></li> '
		+'	      	<li><a id="stackBtn">이등변삼각형</a></li> '
		+'	      	<li><a id="stackBtn">90도 회전</a></li> '
		+'	      	<li><a id="stackBtn">달팽이</a></li> '
		+'	      	<li><a id="stackBtn">대각선채우기</a></li> '
		+'	      	<li><a id="stackBtn">마방진</a></li> '
		+'      	</ul> '
		+'   	 </li> '
		+'   	 </ul> '
		+'    <span class="login-d">${user.name}&nbsp;<a id="logout">로그아웃</a> </span> '
		+'  </div> '
		+'</nav> ';
	},
};
var compUI={
		br: ()=>{return $('<br />')},
		div : x=>{return $('<div/>',{id:x});},
		h1 : x=>{return $('<h1/>',{id:x});},
		h3 : x=>{return $('<h3/>',{id:x});},
		span : x=>{return $('<span/>',{id:x});},
		iTxt : x=>{return $('<input/>',{id:x, type:'text'});},
		aBtn : x=>{return $('<a>',{href:'#',role:'button',id:x});},
		iBtn : x=>{return $('<input/>',{id:x, type:'button'});},
		image : (x,y)=>{return $('<img/>',{id:x, src:y});},
		input : (x,y,z)=>{
			return $('<input/>', 
			{
				id:x,
				type:y,
				value:z
			});
		},
};

var algoUI={
	series : ()=>{
		return '<div id="secont">'
		+'<h1>1부터 100까지 등차수열의 합</h1>'
		+'<br />'
		+'<label id="start_num">시작값:</label>'
		+'<br />'
		+'<label id="end_num">끝날값:</label>'
		+'<br />'
		+'<label id="result"></label>'
		+'</div>';
	},
	
	sort : ()=>{
		return '<div id="sortContent">'
		+'<h1>선택정렬 selcetion</h1>'
		+'<br />'
		+'<label id="insert_num">입력값:</label>'
		+'<br />'
		+'<label id="score"></label>'
		+'<br />'
		+'<label id="result"></label>'
		+'</div>';
	}
}

var bbsUI={
	tblTwo : ()=>{

			var tbl= '<table class="table table-hover" style="width:80%; margin:0 auto;">'
			+'<thead><tr class="hanbit-table tr">';
			var a=[
				{width: '5%', txt:'No'},
				{width: '10%', txt:'제목'},
				{width: '35%', txt:'내용'},
				{width: '10%', txt:'글쓴이'},
				{width: '15%', txt:'등록일'},
				{width: '5%', txt:'조회수'}
				];
			
				$.each(a, (i,j)=>{
					tbl+='<th style="width: '+j.width
					+';">'+j.txt+'</th>'
				});
			
			tbl += '</tr><tbody id="tbody">';
			tbl += '</tbody></thead></table></div>';
		
			return tbl;
		
		   },
		   search:()=>{
			   return '<div style="width:90%;margin:20px auto;">'
			      +'<select id="searchOption" class="form-control" name="searchOption" style="width:20%;float:left;margin-right:36px">'
				   +'<option value="searchByName" >작성자</option>'
				   +'<option value="searchByTitle">제목</option>'
				    +'</select>'
				+'<div class="input-group" style="width:60%; float:left; margin-right:30px">'
				   +'<span class="input-group-addon">SEARCH</span>'
				   +'<input id="msg" type="text" class="form-control" style="width:100%" name="searchWord" placeholder="작성자 또는 제목을  검색하여 주세요" >'
				+'</div>'
				+'<input class="btn btn-primary" style="width:100px" name="search" type="submit"  value="SEARCH"/>'
				+'<input type="hidden" name="action" value="search"/>'
				+'<input type="hidden" name="pageName" value="list" />'
				+'<input type="hidden" name="pageNumber" value="1" />'
				+'</div>'
				+'<div style="margin:30px 0; margin-left:130px; margin-right:129px;" >'
				         +'<label id="count" style="color: #ED534F; font-weight: bold; ">총게시글수 : </label>'
				         +'<button id="write" class="btn btn-danger" style="float:right; width:100px">글쓰기</button>'
				+'</div>';
		   },
		   
		   page : ()=> {
			   return '<br/>'
			   	+'</div>'
				+'<nav aria-label="Page navigation" style="width:350px; margin:0 auto;">'
				+'  <ul class="pagination">'
				+'  	<li><a onclick=""><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span></a></li>'
				+'    <li>'
				+'      <a onclick="" aria-label="Previous">'
				+'        <span aria-hidden="true">&laquo;</span>'
				+'      </a>'
				+'   </li>'
				+'	     <li class="active"><a href="#" >1</a></li>'
				+'	     <li><a href="#" onclick="">2</a></li>'
				+'	     <li><a href="#" onclick="">3</a></li>'
				+'	     <li><a href="#" onclick="">4</a></li>'
				+'	     <li><a href="#" onclick="">5</a></li>'
				+'    <li>'
				+'      <a onclick="" aria-label="Next">'
				+'        <span aria-hidden="true">&raquo;</span>'
				+'      </a>'
				+'    </li>'
				+'    <li><a onclick=""><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span></a></li>'
				+'  </ul>'
				+'</nav>';
			   
		   },
		   
		   detail:()=>{
			   return '   <div class="page-header" style="margin-left: 5%">'
			   + '      <h1 style="display: inline;">게시판</h1>'
			   + '      <a style="font-size: large; float:right; display: inline;">목록가기</a>'
			   + '   </div>'
			   + '   <div class="container">'
			   + '      <div class="row">'
			   + '         <div class="col-md-12">'
			   + '            <div class="well well-sm">'
			   + '               <form class="form-horizontal" method="post">'
			   + '                  <fieldset>'
			   + '                     <legend id="board_title" class="text-center header">게시글쓰기</legend>'
			   + '                     <div class="form-group">'
			   + '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
			   + '                        <div class="col-md-12">'
			   + '                           <input id="fname" name="title" type="text" placeholder="제목" class="form-control" />'
			   + '                        </div>'
			   + '                     </div>'
			   + '                     <div class="form-group">'
			   + '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
			   + '                        <div class="col-md-12">'
			   + '                           <input id="lname" name="name" type="text" placeholder="글쓴이" class="form-control" />'
			   + '                        </div>'
			   + '                     </div>'
			   + '                     <div class="form-group">'
			   + '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
			   + '                        <div class="col-md-12">'
			   + '                           <input id="lregdate" name="regdate" type="text" placeholder="작성날짜" class="form-control" readonly />'
			   + '                        </div>'
			   + '                     </div>'
			   + '                     <div class="form-group">'
			   + '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
			   + '                        <div class="col-md-12">'
			   + '                           <textarea class="form-control" id="message" name="message" rows="15"></textarea>'
			   + '                        </div>'
			   + '                     </div>'
			   + '                     <div class="form-group">'
			   + '                        <div class="col-md-12 text-center">'
			   + '                        	 <br/>'
			   + '                           <button type="submit" id="btn1" style="width: 200px" class="btn btn-primary btn-lg">확 인</button>'
			   + '                           <button type="rest" id="btn2" style="width: 200px" class="btn btn-danger btn-lg">취 소</button>'
			   + '                        </div>'
			   + '                     </div>'
			   + '                  </fieldset>'
			   + '               </form>'
			   + '            </div>'
			   + '         </div>'
			   + '      </div>'
			   + '   </div>'
			   + '<div class="modal fade alert" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">'
			   + '<div class="modal-dialog">'
			   + '<div class="modal-content">'
			   + '<div class="modal-header">'
			   + '   <button type="button" class="close" data-dismiss="modal">'
			   + '   <span aria-hidden="true">x</span>'
			   + '   <span class="sr-only">Close</span></button>'
			   +'	<h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>'
			   +'</div>'
			   +'<div class="modal-body">'
	           +'	<form>'
	           +'		<div class="form-group">'
	           +'			<label for="inputPass">Password</label>'
	           +'			<input type="password" class="form-control" id="userPwd" placeholder="Enter Password"/>'
	           +'		</div>'
	           +'		<button type="submit" id="confirmBtn" style="width:200px;" class="btn btn-primary center-block">확 인</button>'
	           +'	</form>'
	           +'</div>'
	           +'</div>'
	           +'</div>'
	           +'</div>'

			  
		   },
}
var around = {
		airAround: ()=>{
			return 	+'<div id="around" style="margin:0 auto; width:80%; height:200px;">'
		},		   
}	   
