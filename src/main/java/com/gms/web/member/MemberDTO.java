package com.gms.web.member;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//DTO - Data Transfer Object
@Data @Lazy @Component
public class MemberDTO implements Serializable{
	private String id, pwd, name, ssn, regdate, email, major, subject, phone, profile;

}
