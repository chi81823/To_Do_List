package todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todolist.domain.entity.ToDoList;
import todolist.domain.http.request.ToDoListRequest;
import todolist.message.Response;
import todolist.service.ToDoListService;

@RestController
@RequestMapping(path = "/api/todolist")
public class ToDoListController {

    @Autowired
    private ToDoListService service;

    @GetMapping(path = "/get/{id}")
    public Response getById(@PathVariable long id) {

        Response response = new Response("Done", service.findById(id));

        return response;
    }


    @PutMapping(path = "/update/{id}")
    public Response update(@PathVariable Long id, @RequestBody ToDoListRequest toDoListReq) {

        Response response = new Response("Done", service.update(id, toDoListReq.getName(), toDoListReq.getContent()));

        return response;
    }

    @PostMapping(path = "/add")
    public Response add(@RequestBody ToDoList toDoList) {

        Response response = new Response("Done", service.save(toDoList.getName(), toDoList.getContent()));

        return response;
    }

    @GetMapping(path = "/all")
    public Response getAll() {

        Response response = new Response("Done", service.getAll());

        return response;
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteById(@PathVariable long id) {
        service.delete(id);
    }


}
