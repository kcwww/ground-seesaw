import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { FormFieldType } from '@/lib/types/formfield';

const FormPassword = ({ form, isLoading }: FormFieldType) => {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={field.name}>Password</FormLabel>
          <FormControl>
            <Input
              id={field.name}
              disabled={isLoading}
              placeholder="비밀번호를 입력해주세요."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPassword;
