package com.ktran.learningproject.todoapp.repositories;

import com.ktran.learningproject.todoapp.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
