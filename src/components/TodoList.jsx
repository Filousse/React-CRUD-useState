import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


export default function Todolist(props) {
    const [todos, setTodos] =useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
          }
          const newTodos = [todo, ...todos]
          setTodos(newTodos)
        //   console.log("...todos", ...todos);
    }

    const completeTodo = id => {
        let uddateTodos = todos.map(todo => {
            if (todo.id === id) {
                return todo
            }
        });
        setTodos(uddateTodos);
    }
    return (
        <>
        <h3>Liste des éléments useState</h3>
        <TodoForm onSubmit={addTodo}/>
        <Todo
            todos={todos}
            completeTodo={completeTodo}

        />
           
        </>
    )
}
