package com.gms.web.common;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/auth")
public class AuthController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@RequestMapping("/login_view")
	public String goLogin() {
		logger.info("login_view 진입");
		return "public:common/login.tiles";
	}
	
	@RequestMapping("/login")
	public String login() {
		logger.info("login 진입");
		return "common/main";
	}
	
	@RequestMapping("/logout")
	public String logout() {
		logger.info("logout 진입");
		return "common/login";
	}
	
	@RequestMapping("/main")
	public String goMain() {
		logger.info("goMain 진입");
		return "common/main";
	}
}