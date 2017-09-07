package com.gms.web.complex;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.command.ListCommand;
import com.gms.web.command.MoveCommand;
import com.gms.web.command.SearchCommand;
import com.gms.web.constants.Action;

@Component
//생산자(ex.삼성 애플..)
public class CommandFactory {
	public static CommandDTO createCommand(String dir, String action, String page, String pageNumber, String column, String search){
		CommandDTO cmd = null;
		if(action==null){action=Action.MOVE;}
		switch(action){
		case Action.MOVE: 
		case Action.LOGIN:
		case Action.LOGOUT:
		case Action.JOIN:
		case Action.UPDATE:
		case Action.DETAIL:
		case Action.DELETE:
			cmd = new MoveCommand(dir, action, page); //다형성 common의 서브객체(moveCommand)가 cmd를 인스턴스화 시킨다
			break;
		case Action.LIST:
			cmd = new ListCommand(dir, action, page, pageNumber);
		break;
		case Action.SEARCH:
			cmd = new SearchCommand(dir, action, page, pageNumber, column, search);
		break;
		default: 
			System.out.println("command fail"); 
		break;
		}
		return cmd;
	}
}
