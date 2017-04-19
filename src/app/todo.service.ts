import { Injectable } from '@angular/core';
import { Init} from './init.List';

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log('Todo service intialized...');
    this.load();
   }
   getLists(){
     var lists = JSON.parse(localStorage.getItem('lists'));
     return lists;
   }
   getTodos(){
     var todos = JSON.parse(localStorage.getItem('todos'));
     return todos;
   }

   addList(newList){
     var lists = JSON.parse(localStorage.getItem('lists'));

     lists.push(newList);

     localStorage.setItem('lists', JSON.stringify(lists));
   }

  addTodo(newTodo){
     var todos = JSON.parse(localStorage.getItem('todos'));

     todos.push(newTodo);

     localStorage.setItem('todos', JSON.stringify(todos));
   }

  deleteList(listTitle){
    var lists = JSON.parse(localStorage.getItem('lists'));
    
    for(var i = 0; i < lists.length; i++){
      if(lists[i].title == listTitle){
        lists.splice(i, 1);
      }
    }
     localStorage.setItem('lists', JSON.stringify(lists));
  }

  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));    

    for(var i = 0; i < todos.length; i++){
      if(todos[i].text== todoText){
        todos.splice(i, 1);
      }
    }
     localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateList(oldTitle, newTitle){
    var lists = JSON.parse(localStorage.getItem('lists'));
    
    for(var i = 0; i < lists.length; i++){
      if(lists[i].title == oldTitle){
        lists[i].title = newTitle;
      }
    }
     localStorage.setItem('lists', JSON.stringify(lists));
  }

  updateTodo(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos'));    

    for(var i = 0; i < todos.length; i++){
      if(todos[i].text== oldText){
        todos[i].title = newText;
      }
    }
     localStorage.setItem('todos', JSON.stringify(todos));
  }
}
