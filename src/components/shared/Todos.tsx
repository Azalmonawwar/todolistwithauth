import { getTodo } from '@/lib/utils/create-todo'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import DeleteTodoBtn from './DeleteTodoBtn'

const Todos =async () => {
    const user = await currentUser()
    const todos = await getTodo(user?.id as string)
  return (
    <section className="container px-4 mx-auto ">
    <div className="flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold leading-tight text-gray-800 text-center my-10">Messages</h2>
          <div className="overflow-hidden border border-gray-200  md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                  >
                    Title
                  </th>
                  
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                  >
                    Description
                  </th>
                 

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm  font-bold text-left rtl:text-right text-gray-500 "
                  >
                    Action
                  </th>

                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200  ">

                {
                  todos.length >= 1 && todos?.map((elem:any) => {
                    return (
                      <tr key={elem.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">

                            <span className="capitalize">{elem.title}</span>
                          </div>
                        </td>
                        
                        <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">

                            <span>{elem.description} </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            
                            <DeleteTodoBtn id={elem.id}/>

                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
             {
              todos.length === 0 && <tr>
                <td className='text-center' colSpan={4}>No messages</td>
              </tr>
             }   


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Todos