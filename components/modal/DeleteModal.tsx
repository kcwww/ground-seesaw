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
import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

const DeleteModal = () => {
  const { onClose, isOpen, type, props } = useModal();
  const [isUploading, setIsUploading] = useState(false);
  const [inputPassword, setPassword] = useState('');
  const router = useRouter();

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (type !== 'Delete') return null;

  const handleDelete = async () => {
    setIsUploading(true);
    const { id, password, type, postId } = props.data;

    if (inputPassword !== password) {
      toast.error('비밀번호가 일치하지 않습니다.');
      setIsUploading(false);
      return;
    }

    try {
      if (type === 'post') {
        await clientComponentFetch(BACKEND_ROUTES.POST + `/${id}`, {
          method: 'DELETE',
        });
      } else {
        await clientComponentFetch(BACKEND_ROUTES.COMMENT + `/${id}`, {
          method: 'DELETE',
          body: JSON.stringify({ postId: postId }),
        });
      }

      toast.success('성공적으로 삭제되었습니다.');
    } catch (error) {
      toast.error('삭제 중 문제가 발생했습니다.');
    } finally {
      setIsUploading(false);
      router.replace('/home');
    }
  };

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
            value={inputPassword}
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
            disabled={isUploading || !inputPassword}
            onClick={async () => {
              onClose();
              await handleDelete();
              setPassword('');
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
