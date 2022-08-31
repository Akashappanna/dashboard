import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// redux
import {useSelector,useDispatch} from 'react-redux'
import { todoAction } from '../store/todoSlice';

const Todo = () => {
    // const [todos,setTodos]=useState([]);
    // const [backupTodo,setBackupTodo]=useState([])
    const todoData = useSelector(state => state.todos.reduxTodos)
    const dispatch=useDispatch();

    const addTodoHandler=(todo)=>{
        if(todo.title === '' || todo === undefined){
            alert('Hey its empty')
            return;
        }

        // const newTodo=[...backupTodo,todo]
        // setTodos(newTodo)
        // setBackupTodo(newTodo)

        dispatch(todoAction.addTodo(todo))

    }

    console.log(todoData)

  return (
    <div>
        <TodoForm onAddTodo={addTodoHandler}/>
        <TodoList todos={todoData}/>
    </div>
  )
}

export default Todo