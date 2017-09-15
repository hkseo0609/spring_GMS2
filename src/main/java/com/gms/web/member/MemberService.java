package com.gms.web.member;

import java.util.List;
import java.util.Map;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

public interface MemberService {
	//modify와 add빼고는 다 command로 받기
	public List<?> list(CommandDTO cmd);
	public String countMembers();
	public int addMember(Map<?,?> map);
	public StudentDTO findByid(CommandDTO cmd);
	public List<?> findName(CommandDTO cmd);
	public int modfiy(MemberDTO bean);
	public int remove(CommandDTO cmd);
	public Map<String,Object> login(CommandDTO bean);

}
