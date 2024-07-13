import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

type TModalProps = {
  mainQuestionText: string;
  permitButtonText: string;
  permitButtonHandler?: () => Promise<void> | void;
  children: ReactNode;
};

const PermitModal = ({
  mainQuestionText,
  permitButtonText,
  permitButtonHandler,
  children,
}: TModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
          <AlertDialogTitle>{mainQuestionText}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-common-800/80 hover:bg-common-700"
            onClick={permitButtonHandler}
          >
            {permitButtonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PermitModal;
