'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';

import { getLocation } from '@/lib/map/getLocation';
import { getRegion } from '@/lib/map/getRegion';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import * as FIELD from '@/components/form';
import { useModal } from '@/lib/hooks/useModal';
import { usePostForm } from '@/lib/hooks/usePostForm';
import { postFormState } from '@/lib/Recoil/atoms/postFormAtom';

export const postFormSchema = z.object({
  images: z.array(
    z.object({
      file: z
        .instanceof(File)
        .refine((file) => file.type.startsWith('image/'), {
          message: '이미지 파일만 업로드 가능합니다',
        }),
    })
  ),
  description: z
    .string()
    .min(1, {
      message: '내용을 입력해주세요',
    })
    .max(1000, {
      message: '1000자 이내로 작성해주세요',
    }),
  nickname: z.string().min(1, {
    message: '닉네임을 입력해주세요',
  }),
  password: z.string().min(1, {
    message: '비밀번호를 입력해주세요',
  }),
});

const PostForm = () => {
  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      images: [],
      description: '',
      nickname: '',
      password: '',
    },
  });

  const resetRecoil = useResetRecoilState(postFormState);

  useEffect(() => {
    return () => {
      resetRecoil();
    };
  }, []);

  // useEffect(() => {
  //   const getLocationData = async () => {
  //     try {
  //       const { latitude, longitude } = await getLocation();
  //       const region = await getRegion(longitude, latitude);
  //       console.log(region.documents[0].address_name);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getLocationData();
  // }, []);

  const isLoading = form.formState.isSubmitting;

  const { onOpen } = useModal();

  const onSubmit = async (data: z.infer<typeof postFormSchema>) => {
    onOpen('Submit', { data: data });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          className="w-full p-4 justify-center items-center flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FIELD.FormImages form={form} isLoading={isLoading} />
          <FIELD.FormDescription form={form} isLoading={isLoading} />

          <div className="flex gap-4 p-2">
            <FIELD.FormNickname form={form} isLoading={isLoading} />
            <FIELD.FormPassword form={form} isLoading={isLoading} />
          </div>

          <Button type="submit">포스팅</Button>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
