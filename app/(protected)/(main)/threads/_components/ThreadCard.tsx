import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import defaultImg from '@/public/imgs/icons/logo.png';

interface ThreadCardProps {
  id: string;
  nickname: string;
  description: string;
  image: string | null;
  date: string;
  likes: number;
  comments: number;
}

const ThreadCard = ({
  id,
  nickname,
  description,
  image,
  date,
  likes,
  comments,
}: ThreadCardProps) => {
  return (
    <Link href={`/threads/${id}`} className="flex justify-center items-center">
      <Alert className="min-w-[10rem] max-w-[50rem] flex flex-col md:flex-row justify-between gap-4 shadow-md">
        <div className="md:w-1/2 w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              className="rounded-md"
              src={image ? image : defaultImg}
              fill
              alt="placeholder"
            />
          </AspectRatio>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center w-full gap-4">
          <AlertTitle className="md:text-2xl text-xl">{nickname}</AlertTitle>
          <AlertDescription className=" text-md">
            {description.length > 20
              ? `${description.slice(0, 20)}...`
              : description}
          </AlertDescription>
          <AlertDescription className="md:text-md dark:text-gray-700 text-gray-300">
            {date}
          </AlertDescription>
          <div className="flex md:text-sm gap-4">
            <Heart size={'1rem'} /> <p>{likes}</p>
            <MessageCircle size={'1rem'} /> <p>{comments}</p>
          </div>
        </div>
      </Alert>
    </Link>
  );
};

export default ThreadCard;
