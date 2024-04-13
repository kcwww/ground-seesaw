'use client';

import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { toast } from 'sonner';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

import ContactFormField from '@/app/(protected)/(main)/contact/_components/ContactFormField';

export const ContactFormSchema = z.object({
  subject: z.string().min(1, {
    message: '문의 제목을 입력해주세요',
  }),
  email: z.string().optional(),
  message: z
    .string()
    .min(1, {
      message: '메세지를 입력해주세요',
    })
    .max(1000, {
      message: '1000자 이내로 작성해주세요',
    }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      subject: '',
      email: '',
      message: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    try {
      await clientComponentFetch(BACKEND_ROUTES.CONTACT, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      toast.success('문의가 성공적으로 전송되었습니다.');
      form.reset();
    } catch (error) {
      toast.error('문의 전송에 실패했습니다.');
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w=full flex flex-col gap-8"
        >
          <ContactFormField form={form} />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting || loading}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
