package com.ktran.learningproject.todoapp.models.projections;

import com.ktran.learningproject.todoapp.models.ChecklistNote;
import com.ktran.learningproject.todoapp.models.ListItem;
import com.ktran.learningproject.todoapp.models.Note;
//import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDateTime;
import java.util.List;

//@Projection(name="inlineCheckListItem", types={ChecklistNote.class})
public interface InLineCheckListItemsProjection {
    Long getId();
    String getTitle();
    String getUsername();
    String getType();
    LocalDateTime getCreatedAt();
    List<ListItem> getListItems();

}
