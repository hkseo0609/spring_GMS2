package com.gms.web.mapper;

import java.util.List;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Repository
public interface MemberMapper {
	public List<?> selectAll(CommandDTO cmd);
	public String count();
	public int insert(MemberDTO member);
	public StudentDTO selectByid(Command cmd);
	public List<?> findName(CommandDTO cmd);
	public int update(MemberDTO bean);
	public int delete(CommandDTO cmd);
	public MemberDTO login(CommandDTO cmd);
	

}
