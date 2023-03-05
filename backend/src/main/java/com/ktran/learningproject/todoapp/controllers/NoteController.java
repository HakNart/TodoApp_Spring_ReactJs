package com.ktran.learningproject.todoapp.controllers;

//import com.ktran.learningproject.todoapp.modelAssembler.NoteModelAssembler;
import com.ktran.learningproject.todoapp.configuration.LoadDatabase;
import com.ktran.learningproject.todoapp.models.Note;
import com.ktran.learningproject.todoapp.repositories.NoteRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.ContentCachingRequestWrapper;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

//import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
//import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
public class NoteController {
    private final NoteRepository repository;
    private static org.slf4j.Logger log = LoggerFactory.getLogger(LoadDatabase.class);
//    private final NoteModelAssembler assembler;

    public NoteController(NoteRepository repository) {
        this.repository = repository;

    }

    @GetMapping(value = "/users/{userName}/notes")
    public List<Note> getAllNoteByUserName(@PathVariable String userName) {
        List<Note> notes = repository.findAllByUserName(userName);

        return notes;
    }

//    Deserialize JSON into a "Note" object hierarchy
    @PostMapping("/users/{userName}/notes")
    public Note createNewNote(@RequestBody Note newNote, @PathVariable String userName) {
        return repository.save(newNote);
    }


    @GetMapping(value = "/users/{userName}/notes/{id}")
    public Note getOneNote(@PathVariable Long id, @PathVariable String userName) {

        Note note = repository.findById(id).orElseThrow();
        return note;
    }

    @PutMapping(value = "/users/{userName}/notes/{id}")
    public Note replaceNote(@PathVariable String userName, @PathVariable Long id, @RequestBody Note newNote) {
        newNote.setId(id);
        return repository.save(newNote);
    }

    @DeleteMapping(value="/users/{userName}/notes/{id}")
    public void deleteNote(@PathVariable Long id, @PathVariable String userName) {
        repository.deleteById(id);
    }

}
