<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>학생관리</title>
</head>
<body>
<div id="wrapper">
<header>
<h1 class="gms-h1">MEMBER LIST</h1>
</header>
<hr /><br />
<div style="margin: 0 auto; width: 70%">
<div class="row">
  <div class="col-lg-4">
    <div class="input-group">
      <input type="text" id="findName" name="findName" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button id="findbtn" class="btn btn-default" type="button" onclick="app.controller.findName()">Go!</button>
      </span>
    </div>
  </div>
  <h4>회원수 : ${count}</h4>
</div>
</div>
<br />
	<table id="mem-list-tab">
		<tr>
			<th>No</th>
			<th>아이디</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>이메일</th>
			<th>전화번호</th>
			<th>수강과목</th>
			<th>가입날짜</th>
			<th>수정/삭제</th>
		</tr>
		<c:forEach var="i" items="${list}">
		<tr>
			<td><fmt:formatNumber value="${i.num}" pattern="."></fmt:formatNumber></td>
			<td>${i.id}</td>
			<td><a onclick="app.controller.detailStudent('member','${i.id}')">${i.name}</a></td>
			<td>${i.ssn}</td>
			<td>${i.email}</td>
			<td>${i.phone}</td>
			<td>${i.subj}</td>
			<td>${i.regdate}</td>
			<td>
			<a onclick="app.controller.updateStudent('member','${i.id}')">수정</a>
			/
			<a onclick="app.controller.deleteStudent('member','${i.id}')">삭제</a>
			
			</td>
		</tr>
		</c:forEach>
	</table>
	<nav aria-label="Page navigation" style="width:350px; margin:0 auto;">
	  <ul class="pagination">
 		<c:if test="${prevBlock gt 0 }">
	  	<li><a onclick="app.controller.list('1')"><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span></a></li>
	    <li>
	      <a onclick="app.controller.list('${startPage-1}')" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	   	</c:if>
	    <c:forEach varStatus="i" begin="${startPage}" end="${endPage}" step="1">
	    <c:choose>
		    <c:when test="${pageNumber eq i.index}">
		        <li class="active"><a href="#" >${i.index}</a></li>
		    </c:when>
		    <c:otherwise>
		    	 <li><a href="#" onclick="app.controller.list('${i.index}')">${i.index}</a></li>
		    </c:otherwise>
		</c:choose>
	    </c:forEach>
	    <c:if test="${nextBlock le theNumberOfPage}">
	    <li>
	      <a onclick="app.controller.list('${endPage+1}')" aria-label="Next">
	        <span aria-hidden="true">&raquo;</span>
	      </a>
	    </li>
	    <li><a onclick="app.controller.list('${theNumberOfPage}')"><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span></a></li>
	 	</c:if>
	  </ul>
	</nav>

</div>
</body>
<script>
app.member.init();
</script>
</html>

