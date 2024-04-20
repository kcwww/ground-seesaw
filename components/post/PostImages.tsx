import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PostImages = ({ images }: { images: string[] | null }) => {
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
              priority
            />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ));

  return (
    <div className="w-full flex justify-center items-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>{arr}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PostImages;
