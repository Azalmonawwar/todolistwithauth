"use client"
import React from 'react'
import { Button } from '../ui/button'
import { deleteTodoAndUserTodos } from '@/lib/utils/create-todo'

const DeleteTodoBtn = ({id}:{id:string}) => {
    const deleteTodo = async ()=>{
        const response = await deleteTodoAndUserTodos(id);
        console.log(response);
    }
  return (
    <Button variant="destructive" onClick={deleteTodo}>
        Delete
    </Button>
  )
}

export default DeleteTodoBtn