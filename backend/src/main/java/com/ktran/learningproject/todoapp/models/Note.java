package com.ktran.learningproject.todoapp.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property="noteType")
@JsonSubTypes({
        @JsonSubTypes.Type(value=TextNote.class, name="text"),
        @JsonSubTypes.Type(value=ChecklistNote.class, name="checklist")
})
public abstract class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title, userName;
    private LocalDateTime createdAt;

    @NotNull
    private String noteType;
    public Note() {

    }

    public Note(String title, String username, LocalDateTime createdAt, String noteType) {
        this.title = title;
        this.userName = username;
        this.createdAt = createdAt;
        this.noteType = noteType;
    }

    public Note(String title, String username, LocalDateTime createdAt) {
        this.title = title;
        this.userName = username;
        this.createdAt = createdAt;
    }


    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", userName='" + userName + '\'' +
                ", createdAt=" + createdAt +
                ", noteType='" + noteType + '\'' +
                '}';
    }

    //    public abstract void setType(String type);
//    public abstract String getType();


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


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getNoteType() {
        return noteType;
    }

    public void setNoteType(String noteType) {
        this.noteType = noteType;
    }
}
