import React, { useState } from 'react'

const TodoForm = (props) => {
    const [title,setTitle]=useState('')
    const [descrp,setDescrp]=useState('')

    const addtitleHandler=(e)=>{
        setTitle(e.target.value);
    }
    const adddescrpHandler=(e)=>{
        setDescrp(e.target.value);
    }

    // submit handler
    const submitHandler=(e)=>{
        e.preventDefault()
        props.onAddTodo({
            title:title,
            descrp:descrp,
            id:Math.floor(Math.random()* 1000)
        })
        setTitle('')
        setDescrp('')
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='title'>
                    <input type='text' value={title} onChange={addtitleHandler}/>
                </label>
            </div>

            <div>
                <label htmlFor='description'>
                    <input type='text' value={descrp} onChange={adddescrpHandler}/>
                </label>
            </div>

            <div>
                <button type='submit'>Add todo</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm