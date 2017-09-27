package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.Board;
import com.gms.web.command.Command;
import com.gms.web.grade.MajorDTO;

@Repository
public interface GradeMapper {
	public int insertMajor(List<MajorDTO> list);
	public String insert(Command cmd);
	public List<?> selectSome(Command cmd);
	public Board selectOne(Command cmd);
	public String count(Command cmd);
	public String update(Command cmd);
	public String delete(Command cmd);


}
