import { NextResponse, NextRequest } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';

import { GroundSeeSawDB } from '@/Firebase';
