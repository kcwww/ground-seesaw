import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { FormFieldType } from '@/lib/types/formfield';

const FormImages = ({ form, isLoading }: FormFieldType) => {
  return (
    <>
      <FormField
        control={form.control}
        name="images"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor={field.name}>Images</FormLabel>
            <FormControl>
              <Input
                id={field.name}
                disabled={isLoading}
                type="file"
                multiple={true}
                {...field}
                value={undefined}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormImages;
