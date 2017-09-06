<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
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