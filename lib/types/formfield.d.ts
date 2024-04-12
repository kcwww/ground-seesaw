import z from 'zod';
import { UseFormReturn } from 'react-hook-form';

import { postFormSchema } from './../../app/(protected)/(main)/post/_components/PostForm';

interface FormFieldType {
  form: UseFormReturn<z.infer<typeof postFormSchema>>;
  isLoading: boolean;
}

export type { FormFieldType };
