import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
      {
        task: "Track Song",
        id: 1,
        completed: false,
      },
      {
        task: "Create Cover",
        id: 2,
        completed: false,
      }
      ]
    }
  }

  addItem = (taskName) =>{
    const newTodo ={
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  toggleCompleted = (id) =>{
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  clearCompleted = (e) =>{
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo)=> !todo.completed)
    });
  }
  render() {
    return (
      <div>
        <h2>Telephone Heater's To Do App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addItem={this.addItem}/>
        <br></br>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
