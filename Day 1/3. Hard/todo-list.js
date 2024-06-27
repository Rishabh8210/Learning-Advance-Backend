/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
      this.todo = []
  }
  add = (item) => {
      this.todo.push(item);
  }
  remove = (ind) => {
    if(ind < 0 || ind >= this.todo.length)
        return;
    this.todo.splice(ind, 1);
  }
  update = (ind, updtVal) => {
    if(ind < 0 || ind >= this.todo.length)
      return;
    this.todo[ind] = updtVal;
  }
  getAll = () => {
    return this.todo;
  }
  get = (ind) => {
    if(ind < 0 || ind >= this.todo.length)
      return null;
     return this.todo[ind]
  }
  clear = () => {
     this.todo = []
  }
}

module.exports = Todo;
