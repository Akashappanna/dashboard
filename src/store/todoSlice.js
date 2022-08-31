import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

const todoSlice=createSlice({
    name:'todos',
    initialState:{
        reduxTodos:[],
        reduxBackupTodo:[]
    },
    reducers:{
        addTodo(state,action){
            const newTodo = [...state.reduxBackupTodo,action.payload];
            state.reduxTodos=newTodo;
            state.reduxBackupTodo=newTodo;
        }
    }

})

export const todoAction=todoSlice.actions;

export default todoSlice.reducer;