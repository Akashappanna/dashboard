import React from 'react'

const TodoList = ({todos}) => {

  return (
    <div>
        <h2>TodoList</h2>
        {todos.length === 0 && (
            <React.Fragment>
                <h4>Its empty!!!</h4>
                <p>Start adding Todo now</p>
            </React.Fragment>
        )}

        {todos.length > 0 && (
            <ul>
                {todos.map((todo,index) => (
                    <li key={index}>
                        {` Title : ${todo.title} ------ Description : ${todo.descrp}`}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default TodoList