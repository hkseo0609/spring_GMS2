<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>GMS</title>
	<link rel="stylesheet" href="${path.css}/member.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${path.js}/member.js"></script> 
</head>
<body>
	<header>
		<div id="header">
			<tiles:insertAttribute name="header"></tiles:insertAttribute>
		</div>
	</header>
	<section>
		<article id="content">
			<tiles:insertAttribute name="content"></tiles:insertAttribute>
		</article>
	</section>
	<footer>
		<article id="fooger">
			<tiles:insertAttribute name="footer"></tiles:insertAttribute>
		</article>
	</footer>

</body>
</body>
</html>