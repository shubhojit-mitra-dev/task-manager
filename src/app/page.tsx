import Link from 'next/link'
import { PlusIcon } from 'lucide-react'
import TaskCard from '@/components/task-card'

export default function Page() {
    return (
        <div className='py-5 px-10'>
            <div>
                <h1 className='text-4xl font-bold'>Your Tasks</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-5 sm:grid-cols-3'>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>


            <Link
                href="/add-task"
                className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary hover:bg-primary/90 transition-colors"
            >
                <PlusIcon className="h-6 w-6 text-primary-foreground" />
            </Link>
        </div>
    )
}
