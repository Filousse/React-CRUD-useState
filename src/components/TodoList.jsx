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


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
          }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id != id);
        setTodos(removeArr);
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
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}

        />
           
        </>
    )
}
