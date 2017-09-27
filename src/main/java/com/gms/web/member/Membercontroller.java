package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.auth.AuthController;
import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.PaginationProxy;

import org.springframework.ui.Model;

@Controller
@SessionAttributes("detail")
@RequestMapping({"/member","/student"})
public class Membercontroller {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@Autowired MemberService service;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	@Autowired Command bcmd;
	@Autowired PaginationProxy pxy;
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String addStudent(@ModelAttribute MemberDTO member, @RequestParam("subject") List<String> list) {
		
		logger.info("**** id : {}",member.getId());
		logger.info("**** name : {}",member.getName());
		logger.info("**** pwd : {}",member.getPwd());
		logger.info("**** sub : {}",list);
		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("member", member);
		List<MajorDTO> paramList = new ArrayList<>();
		MajorDTO major = null;
		for(int i=0; i<list.size(); i++) {
			major = new MajorDTO();
			major.setId(member.getId());
			major.setSubjId(list.get(i));
			major.setTitle(list.get(i));
			paramList.add(major);
		}
		
		//logger.info("**** 랜덤함수 : {}",paramList);
		paramMap.put("majorList", paramList);
		logger.info("**** 맵결과 : {}",paramMap.get("majorList"));
		service.addMember(paramMap);
		return "redirect:/member/list/1";
	}
	
	@RequestMapping("/list/{pageNum}")
	@SuppressWarnings("unchecked")
	public String list(Model model, @PathVariable String pageNum) {
		logger.info("member_list 진입");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(Integer.parseInt(pageNum));
		int count = Integer.parseInt(service.countMembers());
		pxy.setTheNumberOfRows(count);
		int[] result = new int[6];
		int theNumberOfPages=0,
				startPage=0,
				endPage=0;
		theNumberOfPages = (pxy.getTheNumberOfRows()%pxy.getPageSize()) == 0? pxy.getTheNumberOfRows()/pxy.getPageSize() : pxy.getTheNumberOfRows()/pxy.getPageSize()+1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber()-1)%pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize()-1 <= theNumberOfPages) ? startPage + pxy.getBlockSize()-1 : theNumberOfPages;
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfPages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
		result[5]=startPage+pxy.getBlockSize();
		if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1){
			if(pxy.getPageNumber()==1){
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize()+1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
			}
		}
		List<StudentDTO> list = (List<StudentDTO>) service.list(cmd);
		model.addAttribute("count", count);
		pxy.execute(model, result, list);
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/search/{findName}")
	@SuppressWarnings("unchecked")
	public String search(Model model, @PathVariable String findName) {
		logger.info("member_search 진입");
		cmd.setSearch("%"+findName+"%");
		List<StudentDTO> list = (List<StudentDTO>) service.findName(cmd);
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(1);
		int count = Integer.parseInt(service.countMembers());
		pxy.setTheNumberOfRows(count);
		int[] result = new int[6];
		int theNumberOfPages=0,
				startPage=0,
				endPage=0;
		theNumberOfPages = (pxy.getTheNumberOfRows()%pxy.getPageSize()) == 0? pxy.getTheNumberOfRows()/pxy.getPageSize() : pxy.getTheNumberOfRows()/pxy.getPageSize()+1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber()-1)%pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize()-1 <= theNumberOfPages) ? startPage + pxy.getBlockSize()-1 : theNumberOfPages;
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfPages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
		result[5]=startPage+pxy.getBlockSize();
		if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1){
			if(pxy.getPageNumber()==1){
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize()+1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
			}
		}
		
		model.addAttribute("count", count);
		pxy.execute(model, result, list);
		
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/detail/{detailId}")
	@SuppressWarnings("unchecked")
	public String detail(@PathVariable String detailId, Model model) {
		logger.info("member_detail 진입");
		logger.info("##### 디테일 : "+detailId);
		bcmd.setSearch(detailId);
		model.addAttribute("detail", service.findByid(bcmd));
		return "auth:member/member_detail.tiles";
	}
	
	@RequestMapping("/delete/{delId}")
	public String delete(@PathVariable String delId) {
		logger.info("member_delete 진입");
		logger.info("##### 삭제 : "+delId);
		cmd.setSearch(delId);
		service.remove(cmd);
		return "redirect:/member/list/1";
	}
	
	@RequestMapping("/update")
	public String update(@ModelAttribute MemberDTO mem) {
		logger.info("member_update 진입");
		logger.info("넘어온 업데이트 아이디 : "+mem.getId());
		service.modfiy(mem);
		logger.info("##### 수정완료");
		return "redirect:/member/detail/"+mem.getId();
	}
	

}
