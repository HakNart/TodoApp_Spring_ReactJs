package com.ktran.learningproject.todoapp.controllers;

import com.ktran.learningproject.todoapp.modelAssembler.TodoModelAssembler;
import com.ktran.learningproject.todoapp.models.Todo;
import com.ktran.learningproject.todoapp.repositories.TodoRepository;
import com.ktran.learningproject.todoapp.exceptions.TodoNotFoundException;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;


@RestController
public class TodoController {

    private final TodoRepository repository;
    private final TodoModelAssembler assembler;

    public TodoController(TodoRepository repository, TodoModelAssembler assembler) {
        this.repository = repository;
        this.assembler = assembler;
    }
    //Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/users/{username}/todos")
    public CollectionModel<EntityModel<Todo>> getAllTodosByUsername(@PathVariable String username) {
//        List<EntityModel<Todo>> todos = repository.findByUsername(username).stream()
//                .map(todo -> EntityModel.of(todo,
//                        linkTo(methodOn(TodoController.class).getOneTodo(todo.getId(), todo.getUsername())).withSelfRel(),
//                        linkTo(methodOn(TodoController.class).getAllTodosByUsername(username)).withRel("todos")))
//                .collect(Collectors.toList());
        List<EntityModel<Todo>> todos = repository.findByUsername(username).stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(todos,
                linkTo(methodOn(TodoController.class).getAllTodosByUsername(username)).withSelfRel());

    }

    //Save a new todo
    @PostMapping("/users/{username}/todos")
    public Todo newTodo(@RequestBody Todo newTodo, @PathVariable String username) {
        newTodo.setUsername(username);
        return repository.save(newTodo);
    }

    // Get a todo
    @GetMapping("/users/{username}/todos/{id}")
    public EntityModel<Todo> getOneTodo(@PathVariable Long id, @PathVariable String username) {

        Todo todo = repository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
        return assembler.toModel(todo);
//        return EntityModel.of(todo,
//                linkTo(methodOn(TodoController.class).getOneTodo(id, username)).withSelfRel(),
//                linkTo(methodOn(TodoController.class).getAllTodosByUsername(username)).withRel("todos"));

    }

    // Replace existing todo if id matches, else add a new todo
    @PutMapping("/users/{username}/todos/{id}")
    public Todo replaceTodo(@PathVariable Long id, @PathVariable String username, @RequestBody Todo newTodo) {
        return repository.findById(id)
                .map(todo -> {
                    todo.setDescription(newTodo.getDescription());
                    todo.setDone(newTodo.getDone());
                    todo.setUsername(username);
                    return repository.save(todo);
                })
                .orElseGet(() -> {
                    newTodo.setId(id);
                    return repository.save(newTodo);
                });
    }
    @DeleteMapping("/users/{username}/todos/{id}")
    public void deleteTodo(@PathVariable Long id) {
        repository.deleteById(id);
    }


}


