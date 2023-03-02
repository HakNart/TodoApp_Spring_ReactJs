package com.ktran.learningproject.todoapp.repositories;

import com.ktran.learningproject.todoapp.models.ChecklistNote;
import com.ktran.learningproject.todoapp.models.projections.InLineCheckListItemsProjection;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CheckNoteRepository extends JpaRepository<ChecklistNote, Long> {

}
