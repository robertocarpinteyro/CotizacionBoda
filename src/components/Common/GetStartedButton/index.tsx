import Link from 'next/link';
import { LinkTo } from './styles';

interface GetStartedButtonProps {
  padding: string;
  children?: React.ReactNode;
  href?: string;
}

const GetStartedButton = ({ padding, children, href = '/' }: GetStartedButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only apply smooth scroll for anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
      onClick={handleClick}
    >
      {children || 'Get Started'}
    </LinkTo>
  );
};

export default GetStartedButton;
