import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Received data:', data);

        return NextResponse.json({ message: 'Data received successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 400 });
    }
}
