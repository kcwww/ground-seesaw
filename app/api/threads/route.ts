import { NextResponse, NextRequest } from 'next/server';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const GET = async (req: NextRequest) => {
  try {
    const postsRef = collection(GroundSeeSawDB, 'posts');

    const pageQuery = query(postsRef, orderBy('date', 'desc'));

    const snapshot = await getDocs(pageQuery);

    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      message: 'Recent posts retrieved successfully',
      data: posts,
    });
  } catch (e) {
    return NextResponse.json({
      message: 'Error retrieving documents: ' + e,
    });
  }
};

export { GET };
