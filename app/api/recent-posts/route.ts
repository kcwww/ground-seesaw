import { NextResponse } from 'next/server';

// GET request to /api/recent-posts

const GET = async () => {
  return NextResponse.json({ message: 'Hello from the server!' });
};

export { GET };
