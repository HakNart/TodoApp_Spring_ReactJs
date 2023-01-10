package com.ktran.learningproject.todoapp.exceptions;

public class TodoNotFoundException extends RuntimeException{
    public TodoNotFoundException (Long id) {
        super("Could not find employee " + id);
    }
}
