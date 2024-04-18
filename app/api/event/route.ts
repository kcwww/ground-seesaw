import { NextResponse, NextRequest } from 'next/server';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';

const POST = async (req: NextRequest) => {
  const data = await req.json();
  try {
    const docRef = await addDoc(collection(GroundSeeSawDB, 'events'), data);
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

const GET = async (req: NextRequest) => {
  try {
    const docRef = collection(GroundSeeSawDB, 'events');
    const snapshot = await getDocs(docRef);

    // if snapshot's createAt time is 1 days ago, delete the document
    // snapshot's createAt format is 2012-12-12 12:12:12
    const date = new Date();
    date.setUTCHours(date.getUTCHours() + 9);
    const koreaDate = date.toISOString().slice(0, 10);

    const result = snapshot.docs.map(async (eventDoc) => {
      const data = eventDoc.data();
      const docDate = data.createAt.slice(0, 10);
      if (docDate < koreaDate) {
        const docRef = doc(GroundSeeSawDB, 'events', eventDoc.id);
        await deleteDoc(docRef);
        return null;
      }

      return {
        id: eventDoc.id,
        ...eventDoc.data(),
      };
    });

    const events = result.filter((event) => event !== null);

    return NextResponse.json({
      message: 'Recent events retrieved successfully',
      data: events,
    });
  } catch (e) {
    return NextResponse.json({
      message: 'Error retrieving documents: ' + e,
    });
  }
};

export { POST, GET };
