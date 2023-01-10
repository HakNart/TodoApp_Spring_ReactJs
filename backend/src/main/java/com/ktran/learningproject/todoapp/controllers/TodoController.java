package com.ktran.learningproject.todoapp.controllers;

import com.ktran.learningproject.todoapp.entities.Todo;
import com.ktran.learningproject.todoapp.repositories.TodoRepository;
import com.ktran.learningproject.todoapp.exceptions.TodoNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    private final TodoRepository repository;

    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }
    //Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodosByUsername(@PathVariable String username) {
        return repository.findByUsername(username);
    }

    //Save a new todo
    @PostMapping("/users/{username}/todos")
    public Todo newTodo(@RequestBody Todo newTodo, @PathVariable String username) {
        newTodo.setUsername(username);
        return repository.save(newTodo);
    }

    // Get a todo
    @GetMapping("/users/{username}/todos/{id}")
    public Todo getOneTodo(@PathVariable Long id) {
        return repository.findById(id).orElseThrow( () -> new TodoNotFoundException(id));
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


