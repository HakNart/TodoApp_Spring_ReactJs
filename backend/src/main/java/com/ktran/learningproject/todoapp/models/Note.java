package com.ktran.learningproject.todoapp.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
//@DiscriminatorColumn(name="type", discriminatorType = DiscriminatorType.STRING
public abstract class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title, userName;
    private LocalDateTime createdAt;
    private String type;

    public Note() {

    }
    public Note(String title, String username, LocalDateTime createdAt) {
        this.title = title;
        this.userName = username;
        this.createdAt = createdAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return Objects.equals(id, note.id) && Objects.equals(title, note.title) && Objects.equals(userName, note.userName) && Objects.equals(createdAt, note.createdAt) && Objects.equals(type, note.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, userName, createdAt, type);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUsername() {
        return userName;
    }

    public void setUsername(String userName) {
        this.userName = userName;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
