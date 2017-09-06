package com.gms.web.common;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	//RequestMapping -> 우리가 전에 한 separator 역할! 서블릿에서는 기본적으로 해주고 있다
	@RequestMapping("/")
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		//model -> request로 생각하면 됨. request.setAttribute
		//즉 addAtrribute는 프록시 패턴 역할!
		model.addAttribute("serverTime", new SimpleDateFormat("yyyy년 MM월 dd일 a hh:mm:ss").format(new Date()));
		
		// command 패턴 역할 -> 알아서 페이지 지정해서 넘김
		return "public:common/home.tiles";
	}
	
}