'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useModal } from '@/lib/hooks/useModal';

const DeleteModal = () => {
  const { onClose, isOpen, type, props } = useModal();
  const [isUploading, setIsUploading] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (type !== 'Delete') return null;

  return (
    <AlertDialog open={isOpen && type === 'Delete'}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>지우기 전 확인해주세요 !</AlertDialogTitle>
          <AlertDialogDescription>
            지운 정보는 복구 할 수 없습니다.
            <br /> 정말로 지우시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePassword}
            value={password}
          />
          <AlertDialogCancel
            disabled={isUploading}
            onClick={() => {
              onClose();
              setPassword('');
            }}
          >
            닫기
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-700"
            disabled={isUploading || !password}
            onClick={async () => {
              onClose();
              router.refresh();
            }}
          >
            지우기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
