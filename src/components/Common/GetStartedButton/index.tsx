import Link from 'next/link';
import { LinkTo } from './styles';

interface GetStartedButtonProps {
  padding: string;
  children?: React.ReactNode;
}

const GetStartedButton = ({ padding, children }: GetStartedButtonProps) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      {children || 'Get Started'}
    </LinkTo>
  );
};

export default GetStartedButton;
