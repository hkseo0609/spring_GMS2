package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class StudentDTO {
	private String num, id, name, ssn, email, phone, subj, regdate;
}
