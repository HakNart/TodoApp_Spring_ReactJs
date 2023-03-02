package com.ktran.learningproject.todoapp.models.projections;

import com.ktran.learningproject.todoapp.models.ListItem;
import com.ktran.learningproject.todoapp.models.Note;


import java.time.LocalDateTime;
import java.util.List;

public interface AllTypeNoteProjection {
    Long getId();
    String getTitle();
    String getUsername();
    LocalDateTime getCreatedAt();
//    List<ListItem> getListItems();
}
