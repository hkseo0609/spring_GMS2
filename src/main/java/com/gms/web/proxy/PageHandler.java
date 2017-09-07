package com.gms.web.proxy;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;

@Component
//핸들러 : 이벤트를 처리하는 기능
public class PageHandler extends PaginationProxy{

	public PageHandler(HttpServletRequest request) {
		super(request);
	}
	public static CommandDTO attr(PaginationProxy pxy){
		CommandDTO cmd = new CommandDTO();
		if (pxy.getPageNumber() <= pxy.getTheNumberOfRows() /pxy.getPageSize()+1){
			if(pxy.getPageNumber() ==1){
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1) * pxy.getPageSize()+1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		return cmd;
	}

}
