<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>L O G I N</title>
</head>
<body>
<div id="wrapper">
<header>
<h1 class="gms-h1">ADMIN LOGIN</h1>
</header>
<hr /><br />
	<div style="margin: 0 auto; width: 33%;"><img src="${path.img}/login.gif" style="margin: 0 auto;"></div>
		<br />
		<div style="margin:0 auto; width:200px;"><h4 style="font-size: 20px; color: red;">${message}</h4></div>
		<form id="login_form" name="login_form" class="form-edit" >
		<fieldset>
		<legend>로그인</legend>
			<span class="login-span">ID</span>
			<input type="text" id="login_id" name="id" value="kang" /><br />
			<label>PASSWORD</label><input type="password" id="login_pwd" name="pwd" value="1234"/><br />
			<mark style="font-size: 13px"> *ID는 숫자 포함 8글자 이내*</mark><br />
			<input id="loginBtn" type="submit" value="LOING"  class="submit-pink" >
			<input type="reset" value="CANCLE" class="submit-blue">
			<input type="hidden" name="action" value="login" />
			<input type="hidden" name="page" value="main" />
		</fieldset>
		</form>
		
</div>
<script>
app.auth.init();
</script>
</body>
</html>
