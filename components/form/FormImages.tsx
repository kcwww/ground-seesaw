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
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <FormItem>
            <FormLabel htmlFor={name}>Images</FormLabel>
            <FormControl>
              <Input
                id={name}
                disabled={isLoading}
                type="file"
                accept="image/*"
                multiple={true}
                ref={ref}
                onChange={(event) => {
                  const files = event.target.files;
                  if (!files) return;
                  const filesArray = Array.from(files).map((file) => ({
                    file,
                  }));
                  onChange(filesArray);
                }}
                onBlur={onBlur}
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
