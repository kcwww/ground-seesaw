import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { FormFieldType } from '@/lib/types/formfield';
import { usePostForm } from '@/lib/hooks/usePostForm';

const FormNickname = ({ form, isLoading }: FormFieldType) => {
  const { updatePostForm } = usePostForm();
  return (
    <FormField
      control={form.control}
      name="nickname"
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={field.name}>Nickname</FormLabel>
          <FormControl>
            <Input
              id={field.name}
              disabled={isLoading}
              placeholder="닉네임을 입력해주세요."
              {...field}
              onChange={(event) => {
                field.onChange(event);
                updatePostForm('author', event.target.value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormNickname;
