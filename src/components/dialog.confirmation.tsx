import { useCustomComponents } from 'src/hooks/_use-components';
import { Button as DefaultButton } from './ui/button';
import {
  Dialog as DefaultDialog,
  DialogContent as DefaultDialogContent,
  DialogDescription as DefaultDialogDescription,
  DialogFooter as DefaultDialogFooter,
  DialogHeader as DefaultDialogHeader,
  DialogTitle as DefaultDialogTitle,
  DialogTrigger as DefaultDialogTrigger,
} from './ui/dialog';

export function DialogConfirmation({
  trigger,
  title,
  description,
  labelConfirmButton,
  onConfirm,
}: {
  trigger: JSX.Element;
  title: string;
  description: string;
  labelConfirmButton: string;
  onConfirm: () => void;
}) {
  const dialogCustom = useCustomComponents('dialog');
  const buttonCustom = useCustomComponents('button');

  const Dialog = dialogCustom?.main || DefaultDialog;
  const {
    DialogContent = DefaultDialogContent,
    DialogDescription = DefaultDialogDescription,
    DialogFooter = DefaultDialogFooter,
    DialogHeader = DefaultDialogHeader,
    DialogTitle = DefaultDialogTitle,
    DialogTrigger = DefaultDialogTrigger,
  } = dialogCustom?.subComponents || {};

  const Button = buttonCustom?.main || DefaultButton;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="md:text-left">{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onConfirm}>{labelConfirmButton}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
