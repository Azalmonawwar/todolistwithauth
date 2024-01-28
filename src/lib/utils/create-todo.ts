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
    
        return user.todos;
      } catch (error) {
        console.error('Error getting todos for user:', error);
        throw error; // Rethrow the error for handling in the calling code
      }
}