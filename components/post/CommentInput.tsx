'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const commentSchema = z.object({
  nickname: z.string().min(1, {
    message: '닉네임을 입력해주세요',
  }),
  password: z.string().min(1, {
    message: '비밀번호를 입력해주세요',
  }),
  content: z
    .string()
    .min(1, {
      message: '내용을 입력해주세요',
    })
    .max(1000, {
      message: '1000자 이내로 작성해주세요',
    }),
});

const CommentInput = () => {
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      nickname: '',
      password: '',
      content: '',
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof commentSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full gap-2 justify-center items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full gap-4">
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input className="w-full" placeholder="닉네임" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="w-full"
                      disabled={isLoading}
                      placeholder="비밀번호"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    className="w-full"
                    disabled={isLoading}
                    placeholder="댓글 내용을 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="h-[5rem] flex justify-center items-center"
        >
          댓글 달기
        </Button>
      </form>
    </Form>
  );
};

export default CommentInput;
