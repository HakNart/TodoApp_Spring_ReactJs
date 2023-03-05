package com.ktran.learningproject.todoapp.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "notes")@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property="type", visible = true, include = JsonTypeInfo.As.EXISTING_PROPERTY)
@JsonSubTypes({
        @JsonSubTypes.Type(value=TextNote.class, name="text"),
        @JsonSubTypes.Type(value=ChecklistNote.class, name="checklist")
})

public abstract class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "note_id")
    private Long id;

    private String title;
    private String userName;
    private LocalDateTime createdAt;
    private String type;
    public Note() {
    }

    public Note(String title, String username, LocalDateTime createdAt,String type) {
        this.title = title;
        this.userName = username;
        this.createdAt = createdAt;
        this.type = type;
    }



    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", userName='" + userName + '\'' +
                ", createdAt=" + createdAt +
                ", type='" + type + '\'' +
                '}';
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
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

    public void setType(String noteType) {
        this.type = noteType;
    }
}
