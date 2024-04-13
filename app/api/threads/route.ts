import { NextResponse, NextRequest } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const POST = async (req: NextRequest) => {
  const data = await req.json();
  try {
    const docRef = await addDoc(collection(GroundSeeSawDB, 'posts'), data);
    return NextResponse.json({ message: 'Post added with ID: ' + docRef.id });
  } catch (e) {
    return NextResponse.json({
      message: 'Error adding document: ' + e,
    });
  }
};

export { POST };
