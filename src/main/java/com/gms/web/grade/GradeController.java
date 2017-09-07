package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.AuthController;

@Controller
@RequestMapping("/grade")
public class GradeController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@RequestMapping("/add")
	public String move() {

		logger.info("grade_add 진입");
		return "grade/grade_add";
	}
	
	@RequestMapping("/list")
	public String list() {

		logger.info("grade_list 진입");
		return "grade/grade_list";
	}
	
	@RequestMapping("/detail")
	public String detail() {

		logger.info("grade_detail 진입");
		return "grade/grade_detail";
	}
	
	@RequestMapping("/update")
	public String update() {

		logger.info("grade_update 진입");
		return "grade/grade_update";
	}
	
	@RequestMapping("/delete")
	public String delete() {

		logger.info("grade_delete 진입");
		return "grade/grade_delete";
	}

}
