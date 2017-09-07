package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.AuthController;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@RequestMapping("/write")
	public String move() {

		logger.info("board_write 진입");
		return "board:board/board_write.tiles";
	}
	
	@RequestMapping("/list")
	public String list() {

		logger.info("board_list 진입");
		return "board:board/board_list.tiles";
	}
	
	@RequestMapping("/detail")
	public String detail() {

		logger.info("board_detail 진입");
		return "board:board/board_detail.tiles";
	}
	
	@RequestMapping("/update")
	public String update() {

		logger.info("board_update 진입");
		return "board:board/board_update.tiles";
	}
	
	@RequestMapping("/delete")
	public String delete() {

		logger.info("board_delete 진입");
		return "board:board/board_delete.tiles";
	}

}
