package com.gms.web.board;

import java.util.List;
import org.springframework.stereotype.Service;
import com.gms.web.board.BoardDAO;
import com.gms.web.board.BoardServiceImpl;
import com.gms.web.board.BoardDTO;

@Service
public class BoardServiceImpl implements BoardService{
	public static BoardServiceImpl instance = new BoardServiceImpl();
	public static BoardServiceImpl getInstance() {
		return instance;
	}
	private BoardServiceImpl() {}
	
	@Override
	public List<BoardDTO> list() {
		return null;
	}
	
	@Override
	public String write(BoardDTO bean) {
		String result = null;
		String msg = (Integer.parseInt(result)==1)?"등록되었습니다.":"등록에 실패하였습니다.";
		return msg;
	}

	@Override
	public List<BoardDTO> findByid(String id) {
		return null;
	}

	@Override
	public BoardDTO findBySeq(String seq) {
		return null;
	}

	@Override
	public String count() {
		return null;
	}

	@Override
	public String modfiy(BoardDTO bean) {
		String msg="";
		String result = null;
		msg = (result.equals("1"))?"수정 완료":"수정 실패";
		return msg;
	}

	@Override
	public String remove(String seq) {
		String result = null;
		String msg = (Integer.parseInt(result)==1) ? "삭제되었습니다." : "삭제에 실패하였습니다.";
		return msg;
	}

}
