package com.JT.Job_Tracker.dto;

import lombok.Data;

@Data
public class LoginResponse {
	public String token;

    public LoginResponse(String token) {
        this.token = token;
    }

}
