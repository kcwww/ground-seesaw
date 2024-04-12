'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import * as FIELD from '@/components/form';

export const postFormSchema = z.object({
  images: z.array(z.instanceof(File)).optional(),
  description: z
    .string()
    .min(1, {
      message: '내용을 입력해주세요',
    })
    .max(500, {
      message: '500자 이내로 작성해주세요',
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

  const router = useRouter();

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof postFormSchema>) => {
    console.log(data);

    form.reset();
    toast.success('포스팅 완료 !');
    router.refresh();
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

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
