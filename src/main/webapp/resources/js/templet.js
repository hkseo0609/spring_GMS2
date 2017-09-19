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
		+'</nav> ';
	},
};
var compUI={
		input : (x,y,z)=>{
			return $('<input/>', 
			{
				id:x,
				type:y,
				value:z
			});
		}
};
var algoUI={
	series : ()=>{
		return '<div id="content">'
		+'<h1>1부터 100까지 등차수열의 합</h1>'
		+'<br />'
		+'<label id="start_num">시작값:</label>'
		+'<br />'
		+'<label id="end_num">끝날값:</label>'
		+'<br />'
		+'<label id="result"></label>'
		+'</div>';
	}
}