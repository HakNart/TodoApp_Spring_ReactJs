package com.ktran.learningproject.todoapp.controllers;

import com.ktran.learningproject.todoapp.models.Note;
import com.ktran.learningproject.todoapp.repositories.NoteRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

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

    //Deserialize JSON into a "Note" object hierarchy
    @PostMapping("/users/{userName}/notes")
    public Note createNewNote(@RequestBody Note newNote, @PathVariable String userName) {
        newNote.setUsername(userName);
        return repository.save(newNote);
    }

    @GetMapping(value = "/users/{userName}/notes/{id}")
    public Note getOneNote(@PathVariable Long id, @PathVariable String userName) {
        // Todo: Set up NotFound exception
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
