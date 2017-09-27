package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.auth.AuthController;
import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@Autowired GradeMapper gmapper;
	public static MemberServiceImpl getInstance() {
		return null;
	}

	@Override @Transactional
	public int addMember(Map<?,?> map) {
		member=(MemberDTO) map.get("member");
		mapper.insert(member);
		@SuppressWarnings("unchecked")
		List<MajorDTO> glist = (List<MajorDTO>) map.get("majorList");
		gmapper.insertMajor(glist);
		return 0;
	}

	@Override
	public String countMembers() {
		logger.info("count is {}","entered");
		String count = mapper.count();
		logger.info("count is {}", count);
		return count;
	}
	
	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}
	
	@Override
	public StudentDTO findByid(Command cmd) {
		return mapper.selectByid(cmd);
	}
	
	@Override
	public List<?> findName(CommandDTO cmd) {
		return mapper.findName(cmd);
	}
	
	@Override
	public int modfiy(MemberDTO bean) {
		return mapper.update(bean);
			
	}	
	@Override
	public int remove(CommandDTO cmd) {
		return mapper.delete(cmd);
	}
	
	@Override
	public Map<String,Object> login(CommandDTO bean) {
		Map<String,Object> map = new HashMap<>();
		member = mapper.login(bean);
		String page="", message="";
		if(member!=null) {
			if(member.getPwd().equals(bean.getAction())) {
				page="auth:common/main.tiles";
				message= "success";
			}else {
				page="auth:common/login.tiles";
				message= "비밀번호가 다릅니다.";
			}
		}else {
			page="auth:common/join.tiles";
			message= "아이디가 없습니다.";
		}
		map.put("message", message);
		map.put("page", page);
		map.put("user", member);
		
		/*String page1 = (member!=null) ? (member.getPwd().equals(bean.getAction())) ? 
				"auth:common/main.tiles" : "auth:common/login.tiles" : "auth:common/join.tiles";
		*/
		return map;
	}
}
