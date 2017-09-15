package com.gms.web.auth;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

import org.springframework.ui.Model;

@Controller
@RequestMapping("/auth")
@SessionAttributes("user")
public class AuthController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Autowired MemberService service;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	
	@RequestMapping("/login_view")
	public String goLogin() {
		logger.info("login_view 진입");
		return "public:common/login.tiles";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestParam("id") String id, @RequestParam("pwd") String pwd, Model model) {
		logger.info("login 진입");
		logger.info("#### id : "+id);
		logger.info("#### pwd : "+pwd);
		cmd.setSearch(id);
		cmd.setAction(pwd);
		Map<String,Object> map = service.login(cmd);
		
		if(map.get("message").equals("success")){
			model.addAttribute("user", map.get("user"));
		} 
		model.addAttribute("message", map.get("message"));
		return String.valueOf(map.get("page"));
	}
	
	@RequestMapping("/logout")
	public String logout() {
		logger.info("logout 진입");
		return "public:common/login.tiles";
	}

}
