package com.ktran.learningproject.todoapp.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("checklist")
public class ChecklistNote extends Note{

}
