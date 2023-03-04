package com.ktran.learningproject.todoapp.controllers;

//import com.ktran.learningproject.todoapp.modelAssembler.NoteModelAssembler;
import com.ktran.learningproject.todoapp.models.Note;
import com.ktran.learningproject.todoapp.repositories.NoteRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Collectors;

//import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
//import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;


@RestController
public class NoteController {
    private final NoteRepository repository;
//    private final NoteModelAssembler assembler;

    public NoteController(NoteRepository repository) {
        this.repository = repository;
//        this.assembler = assembler;
    }

    @GetMapping(value = "/users/{userName}/notes")
    public List<Note> getAllNoteByUserName(@PathVariable String userName) {
        List<Note> notes = repository.findAllByUserName(userName);

        return notes;
    }

//    Deserialize JSON into a "Note" object hierarchy
    @PostMapping("/users/{userName}/notes")
    public Note createNewNote(@RequestBody Note newNote, @PathVariable String userName) {
        // Caution: the "noteType" field of the JSON request body is not mapped correctly to the Entity object
        // newNote object is generated with corresponding note type
        // Note: getNoteType() method of subclass is called instead of the superclass Note
        String type = newNote.getNoteType();
        // setNoteType() of the superclass Note to set the noteType
        newNote.setNoteType(type);

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
