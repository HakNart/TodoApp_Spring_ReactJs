package com.ktran.learningproject.todoapp.repositories;

import com.ktran.learningproject.todoapp.entities.TextNote;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "textnotes", path = "notes")
public interface TextNoteRepository extends CrudRepository<TextNote, Long> {

}
