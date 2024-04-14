'use client';

import { SquareX } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useModal } from '@/lib/hooks/useModal';

const DeleteButton = ({
  postId,
  password,
}: {
  postId: string;
  password: string;
}) => {
  const { onOpen } = useModal();

  return (
    <Button
      className="p-0"
      variant="link"
      onClick={() => {
        onOpen('Delete', {
          data: { id: postId, password: password, type: 'post' },
        });
      }}
    >
      <SquareX className="text-gray-400 hover:text-gray-700" />
    </Button>
  );
};

export default DeleteButton;
