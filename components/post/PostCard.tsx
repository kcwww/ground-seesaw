import { Card } from '@/components/ui/card';

interface PostCardProps {
  title: string;
  children: React.ReactNode;
}

const PostCard = ({ title, children }: PostCardProps) => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <Card className="p-4 w-full shadow-md">{children}</Card>
    </>
  );
};

export default PostCard;
