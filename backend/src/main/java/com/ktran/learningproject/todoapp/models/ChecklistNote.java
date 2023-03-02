package com.ktran.learningproject.todoapp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@PrimaryKeyJoinColumn(name = "note_id")
@DiscriminatorValue("checklist")
public class ChecklistNote extends Note{


    public ChecklistNote() {

    }
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<ListItem> listItems = new ArrayList<>();


    public ChecklistNote(String title, String username, LocalDateTime createdAt) {
        super(title, username, createdAt);
    }

    public ChecklistNote(String title, String username, LocalDateTime createdAt, List<ListItem> listItems) {
        super(title, username, createdAt);
        this.listItems = listItems;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        ChecklistNote that = (ChecklistNote) o;
        return Objects.equals(listItems, that.listItems);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), listItems);
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
