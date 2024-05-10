import { CardWrapper } from './card-wrapper';
import { BsExclamationTriangle } from 'react-icons/bs';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Ops, something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BsExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
