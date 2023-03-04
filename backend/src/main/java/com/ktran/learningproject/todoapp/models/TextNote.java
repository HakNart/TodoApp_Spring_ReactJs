package com.ktran.learningproject.todoapp.models;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@PrimaryKeyJoinColumn(name = "note_id")
//@DiscriminatorValue("text")
public class TextNote extends Note {
    private String content;

    public TextNote() {

    }

    public TextNote(String title, String username, LocalDateTime createdAt, String noteType, String content) {
        super(title, username, createdAt, noteType);
        this.content = content;
    }


//    public String getType() {
//        return "text";
//    }
//    public void setType(String type) {
//        this.type = type;
//    }


    public String getNoteType() {
        return "text";
    }
    @Override
    public String toString() {
        return super.toString() +
                "content='" + content + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        TextNote textNote = (TextNote) o;
        return Objects.equals(content, textNote.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), content);
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
