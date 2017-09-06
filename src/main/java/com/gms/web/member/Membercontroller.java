package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

import com.gms.web.common.AuthController;

@Controller
@RequestMapping("/member")
public class Membercontroller {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@RequestMapping("/add")
	public String move() {

		logger.info("member_add 진입");
		return "member/member_add";
	}
	
	@RequestMapping("/list")
	public String list() {

		logger.info("member_list 진입");
		return "member/member_list";
	}
	
	@RequestMapping("/detail")
	public String detail() {

		logger.info("member_detail 진입");
		return "member/member_detail";
	}
	
	@RequestMapping("/update")
	public String update() {

		logger.info("member_update 진입");
		return "member/member_update";
	}
	
	@RequestMapping("/delete")
	public String delete() {

		logger.info("member_delete 진입");
		return "member/member_delete";
	}

}
