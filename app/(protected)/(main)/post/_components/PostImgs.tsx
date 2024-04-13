'use client';

import { useRecoilValue } from 'recoil';
import Image from 'next/image';

import { postFormState } from '@/lib/Recoil/atoms/postFormAtom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PostImgs = () => {
  const { images } = useRecoilValue(postFormState);

  if (!images) return null;

  const length = images.length;

  const arr = Array.from({ length: length }).map((_, index) => (
    <CarouselItem key={index}>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-ratio items-center justify-center p-6">
            <Image
              className="rounded-lg"
              src={images[index]}
              alt="post image"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
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
