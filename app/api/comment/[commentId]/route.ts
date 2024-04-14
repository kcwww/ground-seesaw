import { NextResponse, NextRequest } from 'next/server';
import { doc, getDoc, deleteDoc, setDoc } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const GET = async (
  req: NextRequest,
  { params }: { params: { commentId: string } }
) => {
  const id = params.commentId;

  const postRef = doc(GroundSeeSawDB, 'comment', id);

  try {
    const docSnap = await getDoc(postRef);

    if (docSnap.exists()) {
      return NextResponse.json({
        message: 'Comment found',
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

const DELETE = async (
  req: NextRequest,
  { params }: { params: { commentId: string } }
) => {
  const id = params.commentId;
  const { postId } = await req.json();

  const commentRef = doc(GroundSeeSawDB, 'comment', id);
  const postRef = doc(GroundSeeSawDB, 'posts', postId);

  try {
    await deleteDoc(commentRef);

    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const post = postDoc.data();
      const comments =
        post.comments.filter((commentId: string) => commentId !== id) || null;

      await setDoc(postRef, { comments }, { merge: true });
    }

    return NextResponse.json({
      message: 'Document with ID: ' + id + ' deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Error deleting document: ' + error,
    });
  }
};

export { GET, DELETE };
