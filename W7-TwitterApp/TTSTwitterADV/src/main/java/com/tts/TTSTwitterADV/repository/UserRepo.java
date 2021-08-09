package com.tts.TTSTwitterADV.repository;

import com.tts.TTSTwitterADV.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
