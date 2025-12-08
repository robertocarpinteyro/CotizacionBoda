import Link from 'next/link';
import { LinkTo } from './styles';

interface GetStartedButtonProps {
  padding: string;
  children?: React.ReactNode;
  href?: string;
}

const GetStartedButton = ({ padding, children, href = '/' }: GetStartedButtonProps) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
    >
      {children || 'Get Started'}
    </LinkTo>
  );
};

export default GetStartedButton;
