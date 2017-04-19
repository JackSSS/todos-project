import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ TodoService ]
})
export class ListComponent implements OnInit {

  lists;
  todos;
  text:string = null;
  title:string = null;
  oldText;
  oldTitle;
  listState = "default";
  todoState = "default";                                   
                                     
constructor(private _todoService: TodoService) { }
  ngOnInit() {
    this.todos = this._todoService.getTodos();
    this.lists = this._todoService.getLists();
    
  }
    addList(){
      var newList = {
        title: this.title
      }
      this.lists.push(newList);

      this._todoService.addList(newList);
    }
    addTodo(){
      var newTodo = {
        text: this.text
      }
      this.todos.push(newTodo);
      
      this._todoService.addTodo(newTodo);
    }

    deleteList(listTitle){
      for(var i = 0; i < this.lists.length; i++){
        if(this.lists[i].title == listTitle){
          this.lists.splice(i, 1);
        }
      }

      this._todoService.deleteList(listTitle);
    }
    deleteTodo(todoText){
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].text == todoText){
          this.todos.splice(i, 1);
        }
      }
        this._todoService.deleteTodo(todoText);
    
    }

    editTodo(todo){
      this.todoState = 'edit';
      this.oldText = todo.text;
      this.text = todo.text;
    }

    editList(list){
      this.listState = 'edit';
      this.oldTitle = list.title;
      this.title = list.title;
    }

    updateTodo(){
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].text == this.oldText){
          this.todos[i].text = this.text;
        }
      }

      this._todoService.updateTodo(this.oldText, this.text);
      
      this.todoState = 'default';
    }
    updateList(){
      for(var i = 0; i < this.lists.length; i++){
        if(this.lists[i].title == this.oldTitle){
          this.lists[i].title = this.title;
        }
      }

      this._todoService.updateList(this.oldTitle, this.title);

      this.listState = 'default';
    }
  
  clearText() { 
    this.text = '';
  }
  clearTitle(){
    this.title = '';
  }

}

