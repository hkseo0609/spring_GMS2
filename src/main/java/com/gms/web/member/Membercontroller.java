package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.AuthController;

import org.springframework.ui.Model;

@Controller
@RequestMapping("/member")
public class Membercontroller {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@RequestMapping("/add")
	public String move() {

		logger.info("member_add 진입");
		return "member:member/member_add.tiles";
	}
	
	@RequestMapping("/list")
	public String list() {

		logger.info("member_list 진입");
		return "member:member/member_list.tiles";
	}
	
	@RequestMapping("/detail")
	public String detail() {

		logger.info("member_detail 진입");
		return "member:member/member_detail.tiles";
	}
	
	@RequestMapping("/update")
	public String update() {

		logger.info("member_update 진입");
		return "member:member/member_update.tiles";
	}
	
	@RequestMapping("/delete")
	public String delete() {

		logger.info("member_delete 진입");
		return "member:member/member_delete.tiles";
	}

}
