import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormItemProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
}

const FormItem = ({
  label,
  type,
  name,
  placeholder,
  className,
}: FormItemProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormItem;
