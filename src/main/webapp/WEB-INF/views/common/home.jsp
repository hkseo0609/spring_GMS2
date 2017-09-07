<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- sessionScope 는 생략해도 된다. 
왜냐하면 session이 최대 스코프라 지정 안 해주면 알아서 sessionScope에서 찾기때문에. -->
<img src="${path.img}/loading.gif" alt="" />
<script>
app.path.init('${path.ctx}');
</script>
