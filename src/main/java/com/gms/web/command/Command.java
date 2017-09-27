package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Lazy @Component
//moveCommand를 위해 존재.. 객체화 시키기 위해
public class Command implements Commandable{
   
   @Getter @Setter
   protected String dir, page, startRow, endRow, column, search, action, pageNumber, view;

	@Override
	public void process() {
		// TODO Auto-generated method stub
		
	}
   

}


