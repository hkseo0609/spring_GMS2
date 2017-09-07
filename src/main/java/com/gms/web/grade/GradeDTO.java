package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Lazy @Component
public class GradeDTO {
	@Getter @Setter
	private String gradeSeq, Id, subjId, score, examDate;
	
}
