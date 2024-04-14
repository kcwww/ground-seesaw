'use client';

import { SquareX } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useModal } from '@/lib/hooks/useModal';

const DeleteButton = ({ postId }: { postId: string }) => {
  const { onOpen } = useModal();

  return (
    <Button
      className="p-0"
      variant="link"
      onClick={() => {
        onOpen('Delete', { data: { postId } });
      }}
    >
      <SquareX className="text-gray-400 hover:text-gray-700" />
    </Button>
  );
};

export default DeleteButton;
