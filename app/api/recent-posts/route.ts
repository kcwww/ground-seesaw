import { NextResponse } from 'next/server';

// GET request to /api/recent-posts

const GET = async () => {
  return NextResponse.json({ message: 'Hello from the server!' });
};

const POST = async () => {
  return NextResponse.json({ message: 'Hello from the server! POST' });
};

export { GET, POST };
