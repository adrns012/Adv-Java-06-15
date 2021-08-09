package com.tts.TTSTwitterADV.repository;

import com.tts.TTSTwitterADV.model.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepo extends CrudRepository<Tag, Long> {
    Tag findByPhrase(String phrase);
}