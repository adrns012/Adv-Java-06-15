package com.tts.TTSTwitterADV.service;

import com.tts.TTSTwitterADV.model.Role;
import com.tts.TTSTwitterADV.model.User;
import com.tts.TTSTwitterADV.repository.RoleRepo;
import com.tts.TTSTwitterADV.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Service
public class UserService {
    //slide 38
    private UserRepo userRepo;
    private RoleRepo roleRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepo userRepo,
                       RoleRepo roleRepo,
                       BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public User findByUsername(String username){
        return userRepo.findByUsername(username);
    }

    public List<User> findAll(){
        return (List<User>) userRepo.findAll();
    }

    public void save(User user){
        userRepo.save(user);
    }

    public User saveNewUser(User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setActive(1);
        Role userRole = roleRepo.findByRole("USER");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
        return userRepo.save(user);
    }

    public User getLoggedInUser(){
        String loggedInUser = SecurityContextHolder.getContext()
                .getAuthentication().getName();

        return findByUsername(loggedInUser);
    }
}