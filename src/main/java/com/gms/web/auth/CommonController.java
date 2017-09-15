package com.gms.web.auth;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.products.PathDTO;

@Controller
@RequestMapping("/move")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	
	@RequestMapping("/{dir}/{page}")
	public String moveTo(@PathVariable String dir, @PathVariable String page, 
			HttpSession session, Model model) {
		logger.info("moveTo 진입");
		/*logger.info(path);
		logger.info(page);
		return "test:"+path+"/"+page+".tiles";
		PathDTO p=(PathDTO) session.getAttribute("path");
		System.out.println("######## "+p.getCtx());
		System.out.println("######## "+p.getCss());
		System.out.println("######## "+p.getJs());
		System.out.println("######## "+p.getImg());
		model.addAttribute("exam", p.getCss());*/
		return "auth:"+dir+"/"+page+".tiles";
	}

}

