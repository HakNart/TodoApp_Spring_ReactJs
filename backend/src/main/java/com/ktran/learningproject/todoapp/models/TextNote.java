package com.ktran.learningproject.todoapp.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@PrimaryKeyJoinColumn(name = "text_note_id", referencedColumnName = "note_id")
//@DiscriminatorValue("text")
public class TextNote extends Note {
    private String content;

    public TextNote() {

    }
//    @JsonCreator
    public TextNote(String title, String username,LocalDateTime createdAt,  String noteType,  String content) {

        super(title, username, createdAt, noteType);
        this.content = content;
    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
