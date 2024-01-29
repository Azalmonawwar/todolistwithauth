import { TodoForm } from '@/components/forms/create-todo'
import { currentUser } from '@clerk/nextjs'
import type{ Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "create todo App",
  description:"The best todo list app ",
};
const page =async () => {
  const user = await currentUser()
  return (
    <section className='py-20 md:py-[200px] flex items-center flex-col justify-center'>
    <h2 className="text-center text-xl font-semibold">Create a Todo</h2>
    <TodoForm user={user?.id as string}/>
    </section>
  )
}

export default page