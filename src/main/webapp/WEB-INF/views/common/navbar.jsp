<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">HEEKYOUNG</a>
    </div>
    <ul class="nav navbar-nav">
      <li id="home"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>
      <li class="dropdown">
      	<a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">학생관리<span class="caret"></span></a>
      	<ul id="nav_stu">
	      	<li><a>학생 추가</a></li>
	      	<li><a>학생 목록</a></li>
	      	<li><a>학생 조회</a></li>
	      	<li></li>
	      	<li><a>학생 삭제</a></li>
      	</ul>
   	 </li>
   	 <li class="dropdown">
      	<a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">성적관리<span class="caret"></span></a>
      	<ul id="nav_grade">
	      	<li><a>성적 추가</a></li>
	      	<li><a>성적 상제</a></li>
	      	<li><a>성적 목록</a></li>
	      	<li></li>
	      	<li><a>성적 삭제</a></li>
      	</ul>
   	 </li>
   	 <li class="dropdown">
      	<a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">게시판관리<span class="caret"></span></a>
      	<ul id="nav_board">
	      	<li><a>게시글 추가</a></li>
	      	<li><a>게시글 목록</a></li>
	      	<li><a>게시글 조회</a></li>
	      	<li></li>
	      	<li><a>게시글 삭제</a></li>
      	</ul>
   	 </li>
   	 </ul>
    <span class="login-d">${user.name}&nbsp;<a id="logout">로그아웃</a> </span>
  </div>
</nav>
<script>
	app.navbar.init();
</script>