package com.ktran.learningproject.todoapp.configuration;


import com.ktran.learningproject.todoapp.entities.Todo;
import com.ktran.learningproject.todoapp.repositories.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(TodoRepository repository) {
        return args -> {
          log.info("Preloading " + repository.save(new Todo(1L, "tester", "Item 1", false)));
          log.info("Preloading " + repository.save(new Todo(2L, "tester", "Item 2", false)));
          log.info("Preloading " + repository.save(new Todo(3L, "tester", "Go to school", false)));
          log.info("Preloading " + repository.save(new Todo(4L, "bob", "Buy alcohol", false)));
          log.info("Preloading " + repository.save(new Todo(5L, "tester", "Check bank account", false)));
        };
    }
}
