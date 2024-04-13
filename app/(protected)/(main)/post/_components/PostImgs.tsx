'use client';

import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PostImgs = () => {
  const [images, setImages] = useState<string[]>([]);

  const arr = Array.from({ length: 3 }).map((_, index) => (
    <CarouselItem key={index}>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>{arr}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PostImgs;
