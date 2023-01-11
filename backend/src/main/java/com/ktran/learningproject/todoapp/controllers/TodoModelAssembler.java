package com.ktran.learningproject.todoapp.controllers;

import com.ktran.learningproject.todoapp.entities.Todo;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class TodoModelAssembler implements RepresentationModelAssembler<Todo, EntityModel<Todo>> {
    public EntityModel<Todo> toModel(Todo todo) {

        return EntityModel.of(todo,
                linkTo(methodOn(TodoController.class).getOneTodo(todo.getId(), todo.getUsername())).withSelfRel(),
                linkTo(methodOn(TodoController.class).getAllTodosByUsername(todo.getUsername())).withRel("todos"));
    }

}
