'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
import s3Upload from '@/lib/s3/s3upload';
import { BACKEND_ROUTES, ROUTES } from '@/constants/routes';
import clientComponentFetch from '@/lib/fetch/clientFetch';
import type { PostType } from '@/lib/types/postType';

const SubmitModal = () => {
  const { onClose, isOpen, type, props } = useModal();
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  if (type !== 'Submit') return null;

  const postData = async () => {
    const { images, description, nickname, password } = props.data as any;
    setIsUploading(true);

    try {
      const { uploadImg } = s3Upload();
      const imgUrls = await uploadImg(images.map((img: any) => img.file));
      const date = new Date();
      date.setHours(date.getHours() + 9);
      const koreaDate = date.toISOString().slice(0, 19).replace('T', ' ');

      const data = {
        category: 'post',
        images: imgUrls,
        author: nickname,
        date: koreaDate,
        description,
        location: '',
        password,
        views: 0,
        likes: 0,
        comments: null,
      } as PostType;

      try {
        const res = await clientComponentFetch(BACKEND_ROUTES.POST, {
          method: 'POST',
          body: JSON.stringify(data),
        });

        toast.success('포스팅이 완료되었습니다.');
        router.push(ROUTES.THREADS + `/${res.data}`);
        router.refresh();
      } catch (error) {
        console.error('Error posting data', error);
        toast.error('포스팅에 실패했습니다.');
        router.push('/404');
        router.refresh();
      }
    } catch (error) {
      console.error('Error uploading image', error);
      toast.error('이미지 업로드에 실패했습니다.');
      router.push('/404');
    }
    setIsUploading(false);
  };

  return (
    <AlertDialog open={isOpen && type === 'Submit'}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>포스팅 전 확인해주세요 !</AlertDialogTitle>
          <AlertDialogDescription>
            민감한 정보를 포함한 게시물은 삭제될 수 있습니다. <br /> 수정 및
            삭제를 원하시는 경우 입력한 비밀번호를 꼭 기억해주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isUploading}
            onClick={() => {
              onClose();
            }}
          >
            닫기
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isUploading}
            onClick={async () => {
              await postData();
              onClose();
            }}
          >
            포스팅
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubmitModal;
