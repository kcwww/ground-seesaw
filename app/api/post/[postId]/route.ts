import { NextResponse, NextRequest } from 'next/server';
import { doc, getDoc } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const id = params.postId;
  const type = req.nextUrl.searchParams.get('type') || 'posts';

  const postRef = doc(GroundSeeSawDB, type, id);

  try {
    const docSnap = await getDoc(postRef);

    if (docSnap.exists()) {
      return NextResponse.json({
        message: 'Post found',
        data: docSnap.data(),
      });
    } else {
      return NextResponse.json({
        message: 'No post found with ID: ' + id,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: 'Error retrieving document: ' + error,
    });
  }
};

export { GET };
