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

const FormImages = ({ form, isLoading }: FormFieldType) => {
  const { updatePostForm } = usePostForm();

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
                className="dark:bg-gray-300 dark:text-gray-900"
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

                  const urls = filesArray.map((file) =>
                    URL.createObjectURL(file.file)
                  );

                  onChange(filesArray);
                  updatePostForm('images', urls);
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
