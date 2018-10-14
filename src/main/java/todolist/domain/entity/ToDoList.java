package todolist.domain.entity;


import javax.persistence.*;


@Entity
@Table(name = "to_do_list")
public class ToDoList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "content")
    private String content;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public static final class Builder {
        private Long id;
        private String name;
        private String content;

        private Builder() {}

        public static Builder create() { return new Builder(); }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder content(String content) {
            this.content = content;
            return this;
        }

        public ToDoList build() {
            ToDoList toDoList = new ToDoList();
            toDoList.setId(id);
            toDoList.setName(name);
            toDoList.setContent(content);
            return toDoList;
        }
    }
}
