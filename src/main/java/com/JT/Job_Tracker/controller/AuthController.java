package com.JT.Job_Tracker.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JT.Job_Tracker.dto.LoginRequest;
import com.JT.Job_Tracker.dto.LoginResponse;
import com.JT.Job_Tracker.dto.RegisterRequest;
import com.JT.Job_Tracker.jwt.JwtUtil;
import com.JT.Job_Tracker.model.User;
import com.JT.Job_Tracker.repo.UserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class AuthController {
	

    @Autowired 
    private AuthenticationManager authManager;
    @Autowired 
    private JwtUtil jwtUtil;
    @Autowired
    private UserRepo userRepo;
    @Autowired 
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        User user = new User();
        user.setEmail(request.email);
        user.setName(request.name);
        user.setPassword(passwordEncoder.encode(request.password));
        user.setRole(request.role);
        userRepo.save(user);
        return ResponseEntity.ok("Registered successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.email, request.password)
        );

        User user = userRepo.findByEmail(request.email)
            .orElseThrow(() -> new RuntimeException("User not found"));


        String token = jwtUtil.generateToken(user);

        return ResponseEntity.ok(new LoginResponse(token));
    }

	
	

}
