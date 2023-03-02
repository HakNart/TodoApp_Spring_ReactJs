package com.ktran.learningproject.todoapp.repositories;

import com.ktran.learningproject.todoapp.models.TextNote;
import org.springframework.data.jpa.repository.JpaRepository;



public interface TextNoteRepository extends JpaRepository<TextNote,Long> {

}
