import { NextResponse, NextRequest } from 'next/server';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  const id = params.postId;

  const postRef = doc(GroundSeeSawDB, 'posts', id);

  try {
    const docSnap = await getDoc(postRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const comments = data.comments;

      if (comments) {
        const commentData = await Promise.all(
          comments.map(async (commentId: string) => {
            const commentRef = doc(GroundSeeSawDB, 'comment', commentId);
            const commentDoc = await getDoc(commentRef);

            if (commentDoc.exists()) {
              return { ...commentDoc.data(), id: commentDoc.id };
            }
          })
        );

        return NextResponse.json({
          comments: commentData,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({
      message: 'Error retrieving document: ' + error,
    });
  }
};

export { GET };
