package com.ktran.learningproject.todoapp.configuration;

import com.ktran.learningproject.todoapp.models.ChecklistNote;
import com.ktran.learningproject.todoapp.models.ListItem;
import com.ktran.learningproject.todoapp.models.Note;
import com.ktran.learningproject.todoapp.models.TextNote;
import com.ktran.learningproject.todoapp.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final NoteRepository repository;

    @Autowired
    public DatabaseLoader(NoteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        TextNote note1 = new TextNote("Meeting Notes", "bob", LocalDateTime.of(2019,2,13,12,40,56,400),"text", "My first note");
        TextNote note2 = new TextNote("Testing Notes", "bob", LocalDateTime.of(2017,2,13,12,40,56,400),"text", "Bob second note");
        TextNote note3 = new TextNote("Recipe for Pancakes", "sarah", LocalDateTime.of(2022,8,10,10,15,0,500), "text", "Ingredients:\n- 1 cup flour\n- 2 tbsp sugar\n- 2 tsp baking powder\n- 1/2 tsp salt\n- 1 egg\n- 1 cup milk\n- 2 tbsp melted butter");
        ChecklistNote checkList1 = new ChecklistNote("bob's tasks", "bob", LocalDateTime.now().minusDays(6), "checklist");
        ChecklistNote checkList2 = new ChecklistNote("sarah's tasks", "sarah", LocalDateTime.now().minusDays(5).minusMonths(13), "checklist");


        ListItem item1 = new ListItem("Go shopping", true);
        ListItem item2 = new ListItem("Clean the house", true);
        ListItem item3 = new ListItem("Go away", false);
        ListItem item4 = new ListItem("Fly the saucer", true);
        ListItem item5 = new ListItem("Do laundry", false);
        ListItem item6 = new ListItem("Pay bills", true);
        ListItem item7 = new ListItem("Call mom", false);
        ListItem item8 = new ListItem("Schedule dentist appointment", true);

        List<ListItem> list1 = Arrays.asList(item1,item2,item3,item4);
        checkList1.setListItems(list1);
        List<ListItem> list2 = Arrays.asList(item5,item6,item7,item8);
        checkList2.setListItems(list2);



//        note8.getListItems().add(item1);
//        note8.getListItems().add(item2);
//        note8.getListItems().add(item3);
//        note8.getListItems().add(item4);
//        note9.getListItems().add(item5);
//        note9.getListItems().add(item6);
//        note9.getListItems().add(item7);
//        note9.getListItems().add(item8);


        this.repository.save(note1);
        this.repository.save(note2);
        this.repository.save(note3);
        this.repository.save(checkList1);
        this.repository.save(checkList2);
    }

}
