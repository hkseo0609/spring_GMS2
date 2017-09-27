<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>GMS</title>
	<link rel="stylesheet" href="${path.css}/air.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${path.js}/meta.js"></script> 
</head>
<body>
<div id="container">
<div id="around" style="margin:0 auto; width:80%; height:200px;">
	<h2 style="font-weight: bold;">에어비앤비 둘러보기</h2>
	<br/>
	<div id="box1" class="hk-around">
		<div id="Imagebox1" style="float:left; width:40%; height:70px; background-image: url(${path.img}/img2.JPG);">
		
		<div id="textbox1" class="hk-txtbox">
			<label style="font-size:17px;">
			숙소
			</label>
		</div>
	</div>
	<div id="box2" class="hk-around">
		<div id="Imagebox2" style="float:left; width:40%; height:70px;">
		<img src="${path.img}/img2.JPG"></div>
		<div id="textbox2" class="hk-txtbox">
			<label style="font-size:17px;">
			트립
			</label>
		</div>
	</div>
	<div id="box3" class="hk-around">
		<div id="Imagebox3" style="float:left; width:40%; height:70px;">
		<img src="${path.img}/img3.JPG"></div>
		<div id="textbox3" class="hk-txtbox">
			<label style="font-size:17px;">
			레스토랑
			</label>
		</div>
	</div>
</div>
</div>
</body>
</html>