import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Todo from "./components/Todo";
import CompletedTodo from './components/CompletedTodo';

function App() {
    const [todos, setTodos] = useState([
        {id: 14, title: 'Hurray!!! merge to master'},
        {id: 13, title: 'Apply for re-review'},
        {id: 12, title: 'Do changes requested in review'},
        {id: 11, title: 'Get review'},
        {id: 10, title: 'Rise PR'},
        {id: 9, title: 'Push to github'},
        {id: 8, title: 'Commit changes'},
        {id: 7, title: 'Build nice Readme.md file'},
        {id: 6, title: 'Do some more code'},
        {id: 5, title: 'Do code'},
    ]);

    const [completedTodos, setCompletedTodos] = useState([
        {id: 4, title: 'Remove boiler code'},
        {id: 3, title: 'Make new app with create-react-app command'},
        {id: 2, title: 'Install react'},
        {id: 1, title: 'Install npm'},
    ]);

    const [addTodoText, setAddTodoText] = useState('');

    const performAddTodo = () => {
        let newTodos = todos
        let newTodo = {id: todos.length + 1, title: addTodoText}
        newTodos.unshift(newTodo)
        setTodos(newTodos)
        setAddTodoText('')
    }

    const deleteTodo = (todoId) => {
        let newTodos = todos
        newTodos = newTodos.filter(todo => todo.id != todoId);
        setTodos(newTodos);
    }

    const editTodo = (todoId, newTitle) => {
        let newTodos = todos;
        let todoIndex = todos.findIndex(todo => todo.id == todoId)
        newTodos[todoIndex].title = newTitle
        setTodos(newTodos);
    }

    const completeTodo = (todoId) => {
        //remove from todo
        let newTodos = todos
        let todo = newTodos.find(todo => todo.id == todoId);
        deleteTodo(todoId)
        //add to complete todo
        let newCompletedTodos = completedTodos;
        newCompletedTodos.unshift(todo)
        setCompletedTodos(newCompletedTodos)
    }

    console.log(todos);
    return (
        <div className="App d-flex flex-column">
          <header className="App-header">
              <h1>ToDo App</h1> 
          </header>
          <section className="App-body row flex-grow-1">
              <div className="col-8">
                  <div className="todos-list">
                    {
                        todos.map(todo => <Todo data={todo} delete={deleteTodo} edit={editTodo} complete={completeTodo}/>)
                    }
                  </div>
                  <div className="add-todo my-3 mx-3 d-flex justify-content-around">
                      <input className="form-control w-75" onChange={(e) => setAddTodoText(e.target.value)} value={addTodoText}/>
                      <button type="button" className='btn btn-danger' onClick={(e) => setAddTodoText('')} disabled={addTodoText==""}>Clear</button>
                      <button type="button" className="btn btn-lg btn-success" disabled={addTodoText==""} onClick={performAddTodo}>+ Add</button>
                  </div>
              </div>
              <div className="col-4">
                  <h4>Completed Todos</h4>
                  <div className='completed-todos-list h-75'>
                      {
                          completedTodos.map(cTodo => <CompletedTodo data={cTodo}/>)
                      }
                  </div>
              </div>
          </section>
          <footer>
              <a href="https://www.linkedin.com/in/AkashDPA" className='text-white'>
                @Akash Pathade 
              </a>
          </footer>
        </div>
    );
}

export default App;
