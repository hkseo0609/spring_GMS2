package com.gms.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.auth.AuthController;
import com.gms.web.command.Command;
import com.gms.web.command.RespMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.StudentDTO;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired MemberMapper memberMapper;
	@Autowired Command cmd;
	@Autowired StudentDTO member;

	public @ResponseBody Map<?,?> post() {
		return null;
	};

	@RequestMapping("/list/articles/{cate}")
	public @ResponseBody Map<?,?> list(@PathVariable String cate) {
		logger.info("board_list 진입");
		Map<String,Object> map = new HashMap<>();
		System.out.println("board/list 성공!");
		IListService listService = null;
		IGetService countService = null;
		switch (cate) {
		case "board" :
			listService =(x)-> {
					// TODO Auto-generated method stub
					return boardMapper.selectList(cmd);
				};
			countService =(x)->{
				return boardMapper.count(cmd);
			};
			map.put("list", listService.execute(cmd));
			map.put("total", countService.execute(cmd));
			
			break;
		
		case "grade" :
			/*cmd = null;
			listService =(x)-> {
					// TODO Auto-generated method stub
					return gradeMapper.selectSome(cmd);
				};
			map.put("list", listService.execute(cmd));*/
			break;
		};
		return map;
	}
	
	@RequestMapping("/get/{cate}/{seq}")
	public @ResponseBody Map<?,?> get(@PathVariable String cate, @PathVariable String seq) {
		logger.info("get 진입");
		System.out.println("###### 넘어온 시퀀스 값 : " +seq);
		Map<String,Object> map = new HashMap<>();
		IGetService detailService = null;
		cmd.setSearch(seq);
		detailService = (x)->{
				return boardMapper.selectOne(cmd);
		};
		map.put("detail", detailService.execute(cmd));
		return map;
	};
	@RequestMapping(value="/put/board", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> put(@RequestBody Board board){
		Map<String,String> map = new HashMap<>();
		IPutService updateService = null;
		cmd.setAction(String.valueOf(board.getArticleSeq()));
		cmd.setColumn(board.getTitle());
		cmd.setDir(board.getId());
		cmd.setPage(board.getContent());
		updateService = (x)->{		
			boardMapper.update(cmd);
		};
		updateService.execute(cmd);
		System.out.println(cmd.getColumn());
		map.put("update", cmd.getAction());
		return map;
	};
	
	@RequestMapping(value="/delete/board", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> delete(@RequestBody Board board) {
		Map<String,Object> map = new HashMap<>();
		cmd.setSearch(board.getId());
		IGetService memberService = (x)->{		
			return memberMapper.selectByid(cmd);
		};
		member = (StudentDTO) memberService.execute(cmd);
		System.out.println(member.getPwd());
		if(board.getPwd().equals(member.getPwd())) {
			cmd.setSearch(String.valueOf(board.getArticleSeq()));
			IDeleteService deleteService = (x)->{		
				boardMapper.delete(cmd);
			};
			deleteService.execute(cmd);
			map.put("msg", "success");
		}else{
			map.put("msg", "fail");
		};
		
		//System.out.println("넘어온 값############"+board.getPwd()+board.getId());
		
		return map;
	};


}
