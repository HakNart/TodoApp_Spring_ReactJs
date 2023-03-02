package com.ktran.learningproject.todoapp.controllers;

import com.ktran.learningproject.todoapp.models.Note;
import com.ktran.learningproject.todoapp.repositories.NoteRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoteController {
    private final NoteRepository repository;

    public NoteController(NoteRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value = "/users/{userName}/notes")
    public List<Note> getAllNoteByUserName(@PathVariable String userName) {
        List<Note> notes = repository.findAllByUserName(userName);
        return notes;
    }

}
