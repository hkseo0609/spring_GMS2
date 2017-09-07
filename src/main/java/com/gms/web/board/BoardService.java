package com.gms.web.board;

import java.util.List;
import org.springframework.stereotype.Component;
import com.gms.web.board.BoardDTO;

@Component
public interface BoardService {
	public String write(BoardDTO bean);
	public List<BoardDTO> list();
	public List<BoardDTO> findByid(String id);
	public BoardDTO findBySeq(String seq);
	public String count();
	public String modfiy(BoardDTO bean);
	public String remove(String seq);

}
