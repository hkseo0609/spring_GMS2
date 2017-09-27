package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

//bigbean : 모든 sql 프로퍼티 이쪽으로
@Component
@Data
public class RespMap {
	private int articleSeq, hitcount;
	private String id, title, content, regdate, count;

}
