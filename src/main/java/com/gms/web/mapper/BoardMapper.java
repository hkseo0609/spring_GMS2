package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.Board;
import com.gms.web.command.Command;
import com.gms.web.command.RespMap;

@Repository
public interface BoardMapper {
	public String insert(Command cmd);
	public List<RespMap> selectList(Command cmd);
	public RespMap selectOne(Command cmd);
	public RespMap count(Command cmd);
	public void update(Command cmd);
	public void delete(Command cmd);


}
