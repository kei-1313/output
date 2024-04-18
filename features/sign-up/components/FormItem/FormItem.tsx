import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormItemProps {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  className?: string;
}

const FormItem = ({ label, type, id, placeholder, className }: FormItemProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormItem;
