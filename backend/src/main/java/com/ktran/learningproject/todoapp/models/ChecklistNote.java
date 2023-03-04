package com.ktran.learningproject.todoapp.models;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@PrimaryKeyJoinColumn(name = "note_id")
//@DiscriminatorValue("checklist")
public class ChecklistNote extends Note{

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<ListItem> listItems = new ArrayList<>();


    public ChecklistNote(String title, String username, LocalDateTime createdAt, String noteType) {
        super(title, username, createdAt,noteType);
    }

    public ChecklistNote(String title, String username, LocalDateTime createdAt, String noteType, List<ListItem> listItems) {
        super(title, username, createdAt,noteType);
        this.listItems = listItems;
    }

    public ChecklistNote() {

    }


    public String getNoteType() {
        return "checklist";
    }

    @Override
    public String toString() {
        return "ChecklistNote{" +
                "listItems=" + listItems +
                '}';
    }

    public List<ListItem> getListItems() {
        return listItems;
    }

    public void setListItems(List<ListItem> listItems) {
        this.listItems = listItems;
    }
}
