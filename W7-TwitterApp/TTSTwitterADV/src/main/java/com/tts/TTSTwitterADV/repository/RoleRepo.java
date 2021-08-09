package com.tts.TTSTwitterADV.repository;

import com.tts.TTSTwitterADV.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends CrudRepository<Role, Long> {
    Role findByRole(String role);
}
