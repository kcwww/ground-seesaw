import { NextResponse, NextRequest } from 'next/server';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
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
    const recentEvent = query(docRef, orderBy('date', 'asc'));

    const snapshot = await getDocs(recentEvent);

    const date = new Date();
    date.setUTCHours(date.getUTCHours() + 9);
    const koreaDate = date.toISOString().slice(0, 10);

    const result = await Promise.all(
      snapshot.docs.map(async (eventDoc) => {
        const data = eventDoc.data();
        const docDate = data.date.slice(0, 10);
        if (docDate < koreaDate) {
          const docRef = doc(GroundSeeSawDB, 'events', eventDoc.id);
          await deleteDoc(docRef);
          return null;
        }

        return {
          id: eventDoc.id,
          ...eventDoc.data(),
        };
      })
    );

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
