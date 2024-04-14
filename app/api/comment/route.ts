import { NextResponse, NextRequest } from 'next/server';
import { collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { postId } = data;
  try {
    const docRef = await addDoc(collection(GroundSeeSawDB, 'comment'), data);

    const postRef = doc(GroundSeeSawDB, 'posts', postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const post = postDoc.data();
      const comments = post.comments
        ? [...post.comments, docRef.id]
        : [docRef.id];

      await setDoc(postRef, { comments }, { merge: true });
    }

    return NextResponse.json({
      message: 'Post added with ID: ' + docRef.id,
      data: docRef.id,
    });
  } catch (e) {
    return NextResponse.json({
      message: 'Error adding document: ' + e,
    });
  }
};

export { POST };
