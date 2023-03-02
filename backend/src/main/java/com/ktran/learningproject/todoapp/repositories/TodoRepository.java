package com.ktran.learningproject.todoapp.repositories;

import com.ktran.learningproject.todoapp.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByUsername(String username);
}
