import  { TodoForm } from "@/components/forms/create-todo";
import Todos from "@/components/shared/Todos";
import { createTodo, getTodo } from "@/lib/utils/create-todo";
import { initialUser } from "@/lib/utils/intial-user";
import { UserButton } from "@clerk/nextjs";



export default async function Home() {
  return (
    <section className="py-10 md:py-20 w-[90%] md:w-[60%]  mx-auto"> 
      
      <Todos/>

    </section>
  )
}