package com.ktran.learningproject.todoapp.configuration;

import com.ktran.learningproject.todoapp.entities.Note;
import com.ktran.learningproject.todoapp.entities.TextNote;
import com.ktran.learningproject.todoapp.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final NoteRepository repository;

    @Autowired
    public DatabaseLoader(NoteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Note note1 = new TextNote("Meeting Notes", "bob", LocalDateTime.of(2019,2,13,12,40,56,400), "My first note");
        this.repository.save(note1);
        this.repository.save(new TextNote("Meeting Notes", "bob", LocalDateTime.of(2017,2,13,12,40,56,400), "My first note"));
        this.repository.save(new TextNote("Meeting Notes", "sarah", LocalDateTime.of(2019,2,13,12,40,56,400), "My first note"));
        this.repository.save(new TextNote("Meeting Notes", "bob", LocalDateTime.of(2019,2,13,12,40,56,400), "My first note"));
        this.repository.save(new TextNote("Meeting Notes", "tim", LocalDateTime.of(2019,2,13,12,40,56,400), "My first note"));
        this.repository.save(new TextNote("Meeting Notes", "sarah", LocalDateTime.of(2019,2,13,12,40,56,400), "My first note"));
    }

}
