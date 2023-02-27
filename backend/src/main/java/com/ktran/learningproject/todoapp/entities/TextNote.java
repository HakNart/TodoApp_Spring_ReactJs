package com.ktran.learningproject.todoapp.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@DiscriminatorValue("text")
public class TextNote extends Note {
    private String content;

    public TextNote(String title, String username, LocalDateTime createdAt, String content) {
        super(title, username, createdAt);
        this.content = content;
    }

    public TextNote() {

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
