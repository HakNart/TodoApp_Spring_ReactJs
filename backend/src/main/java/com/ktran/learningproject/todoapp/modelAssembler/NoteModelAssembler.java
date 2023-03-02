package com.ktran.learningproject.todoapp.modelAssembler;

import com.ktran.learningproject.todoapp.controllers.NoteController;
import com.ktran.learningproject.todoapp.models.Note;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

public class NoteModelAssembler implements RepresentationModelAssembler<Note, EntityModel<Note>> {
    // Return links to self and to collection resources
    public EntityModel<Note> toModel(Note note) {
        return EntityModel.of(note,
                WebMvcLinkBuilder.linkTo(methodOn(NoteController.class).getAllNoteByUserName(note.getUsername())).withRel("notes"));
    }
}
