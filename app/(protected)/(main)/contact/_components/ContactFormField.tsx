import z from 'zod';
import { UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { ContactFormSchema } from '@/app/(protected)/(main)/contact/_components/ContactForm';

interface ContactFormFieldProps {
  form: UseFormReturn<z.infer<typeof ContactFormSchema>>;
}

const ContactFormField = ({ form }: ContactFormFieldProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel htmlFor={field.name}>제목</FormLabel>
            <FormControl>
              <Input
                id={field.name}
                disabled={form.formState.isSubmitting}
                placeholder="제목을 입력해주세요."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel htmlFor={field.name}>이메일</FormLabel>
            <FormControl>
              <Input
                id={field.name}
                type="email"
                disabled={form.formState.isSubmitting}
                placeholder="답장이 필요하시다면 이메일을 입력해주세요."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem className="w-full">
            <div className="flex justify-between px-2">
              <FormLabel htmlFor={field.name}>메세지</FormLabel>
              {form.watch('message').length + ' / 1000'}
            </div>
            <FormControl>
              <Textarea
                id={field.name}
                className="h-32"
                disabled={form.formState.isSubmitting}
                placeholder="내용을 입력해주세요."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ContactFormField;
