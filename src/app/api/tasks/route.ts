import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
    try {
        const client = await clientPromise
        const db = client.db("taskmanager")

        const data = await request.json()
        const taskData = {
            ...data,
            createdAt: new Date(),
            completed: false
        }

        const result = await db.collection("tasks").insertOne(taskData)

        return NextResponse.json({
            message: 'Task created successfully',
            taskId: result.insertedId
        }, { status: 201 })
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({
            error: 'Failed to create task'
        }, { status: 500 })
    }
}
