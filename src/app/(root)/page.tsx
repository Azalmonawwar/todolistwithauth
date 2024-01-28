import { createTodo, getTodo } from "@/lib/utils/create-todo";
import { initialUser } from "@/lib/utils/intial-user";
import { UserButton } from "@clerk/nextjs";



export default async function Home() {
  // const profile = await initialUser();
  // const todos = await getTodo(profile?.userId )
  console.log(todos)
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}