"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createTodo } from "@/lib/utils/create-todo"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
})

export function TodoForm({user}:{user:string}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description:""
    },
  })

  const router = useRouter()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await createTodo(user,values.title,values.description);
    form.reset()
    if(response){
      router.push('/')
    }
  }

  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex  flex-col w-full gap-5 items-center justify-between">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Title</FormLabel>
              <FormControl className="w-[300px]">
                <Input placeholder="Title...."  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Description</FormLabel>
              <FormControl className="w-[300px]">
                <Input placeholder="Desciption...." className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
