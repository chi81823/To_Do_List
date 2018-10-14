package todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todolist.domain.entity.ToDoList;
import todolist.repository.ToDoListRepository;

import java.util.List;

@Service
public class ToDoListService {
    @Autowired
    private ToDoListRepository repo;

    public ToDoList findById(long id) {
        return repo.findById(id).orElseThrow(null);
    }

    public ToDoList save(String name, String content) {
        return repo.save(ToDoList.Builder.create()
                                         .name(name)
                                         .content(content)
                                         .build());
    }

    public List<ToDoList> getAll() {
        return repo.findAll();
    }

    public ToDoList update(long id, String name, String content) {
        ToDoList toDoList = findById(id);
        toDoList.setName(name);
        toDoList.setContent(content);
        return repo.save(toDoList);
    }

    public void delete(long id) {
        repo.deleteById(id);
    }
}
