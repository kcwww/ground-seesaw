import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import type { FormFieldType } from '@/lib/types/formfield';

const FormDescription = ({ form, isLoading }: FormFieldType) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem className="w-full">
          <div className="flex justify-between px-2">
            <FormLabel htmlFor={field.name}>Description</FormLabel>
            <div>{form.watch('description').length + ' / 500'}</div>
          </div>
          <FormControl>
            <Textarea
              id={field.name}
              className="h-32"
              disabled={isLoading}
              placeholder="내용을 입력해주세요."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDescription;
