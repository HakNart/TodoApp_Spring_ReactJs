package com.ktran.learningproject.todoapp.repositories;

import com.ktran.learningproject.todoapp.entities.Note;
import com.ktran.learningproject.todoapp.entities.TextNote;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "notes", path="notes")
public interface NoteRepository extends CrudRepository<Note, Long> {
}

