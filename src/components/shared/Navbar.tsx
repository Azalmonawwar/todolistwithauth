import { currentUser,UserButton } from '@clerk/nextjs'
import Link from 'next/link'


const Navbar =async () => {
    const user = await currentUser()
  return (
    <header className='h-[100px] w-full'>
        <nav className='h-full w-[60%] mx-auto flex items-center justify-between '>
            <h1 className='text-2xl font-bold '>
                <Link href={'/'}>
               
                        Todo list App
               
                </Link>
            </h1>
                
            
            <ul>
                <li><Link href={'/create-todo'}>Create</Link></li>
            </ul>
            <div className=' h-[200px] flex items-center justify-between gap-4'>
                <p className='font-semibold'>
                    {user?.firstName +" "+ user?.lastName}
                </p>
                <UserButton />
            </div>
        </nav>
    </header>
  )
}

export default Navbar