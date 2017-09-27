package com.gms.web.board;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class Board implements Serializable{
	private int articleSeq, hitcount;
	private String id, title, content, regdate, count, pwd;
	
}
