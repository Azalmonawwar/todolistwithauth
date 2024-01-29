'use server'
import { revalidatePath } from "next/cache";
import { db } from "../db";

export async function createTodo(userId:string,title:string,description:string,){
    try {
        const todo = await db.todo.create({
          data: {
            title,
            description,
            completed: false,
            userId,
          },
        });
    
        return todo;
      } catch (error) {
        console.error('Error creating todo:', error);
        throw error; // Rethrow the error for handling in the calling code
      }
}


export async function getTodo (userId:string){
    try {
        const user = await db.user.findUnique({
          where: {
            userId: userId,
          },
          include: {
            todos: true,
          },
        });
    
        if (!user) {
          throw new Error(`User with ID ${userId} not found`);
        }
        revalidatePath('/')
        return user.todos;
      } catch (error) {
        console.error('Error getting todos for user:', error);
        throw error; // Rethrow the error for handling in the calling code
      }
}

export async function deleteTodoAndUserTodos(todoId: string): Promise<void> {
  try {
    // Delete the specified todo and its associated user's todos
    await db.todo.deleteMany({
      where: {
        OR: [
          { id: todoId },
          { userId: { equals: todoId } },
        ],
      },
    });
    revalidatePath('/')
  } catch (error) {
    console.error('Error deleting todo and user todos:', error);
    throw error; // Rethrow the error for handling in the calling code
  } finally {
    await db.$disconnect();
  }
}