package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.member.MemberDAO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Service
public class MemberServiceImpl implements MemberService {
	public static MemberServiceImpl instance = new MemberServiceImpl();
	
	public static MemberServiceImpl getInstance() {
		return instance;
	}
	private MemberServiceImpl() {
		
	}
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("memberservice 진입");
		MemberDTO m = (MemberDTO)map.get("member");
		System.out.println("넘어온 값 :"+m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO> list = (List<MajorDTO>)map.get("major");
		System.out.println("넘어온 값 수강과목:"+list);
		String rs = null;
		String page = "";
		page = (Integer.parseInt(rs)==1)? "main" : "join";
		return page;
	}

	@Override
	public String countMembers(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public List<?> list(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public StudentDTO findByid(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public List<?> findName(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public String modfiy(MemberDTO bean) {
		String msg = "";
		String rs = null;
		msg = (Integer.parseInt(rs)==1)?msg="수정 성공":"수정 실패";
		return msg;
			
	}	
	@Override
	public String remove(CommandDTO cmd) {
		String msg = "";
		String rs = null;
		msg = (Integer.parseInt(rs)==1)?msg="삭제 성공":"삭제 실패";
		return msg;
	}
	@Override
	public Map<String,Object> login(MemberDTO bean) {
		Map<String,Object> map = new HashMap<>();
		CommandDTO cmd = new CommandDTO();
		cmd.setSearch(bean.getId());
		MemberDTO temp = null;
		System.out.println(temp.getId());
		String page = (temp!=null) ? (bean.getPwd().equals(temp.getPwd())) ? "main" : "login": "join";
		map.put("page", page);
		map.put("user", temp);
		return map;
	}
}
