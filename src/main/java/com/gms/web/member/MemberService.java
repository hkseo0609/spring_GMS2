package com.gms.web.member;

import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

public interface MemberService {
	//modify와 add빼고는 다 command로 받기
	public List<?> list(CommandDTO cmd);
	public String countMembers(CommandDTO cmd);
	public String addMember(Map<String, Object> map);
	public StudentDTO findByid(CommandDTO cmd);
	public List<?> findName(CommandDTO cmd);
	public String modfiy(MemberDTO bean);
	public String remove(CommandDTO cmd);
	public Map<String,Object> login(MemberDTO bean);

}
