import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { FormFieldType } from '@/lib/types/formfield';

const FormNickname = ({ form, isLoading }: FormFieldType) => {
  return (
    <FormField
      control={form.control}
      name="nickname"
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={field.name}>Nickname</FormLabel>
          <FormControl>
            <Input
              disabled={isLoading}
              placeholder="닉네임을 입력해주세요."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormNickname;
