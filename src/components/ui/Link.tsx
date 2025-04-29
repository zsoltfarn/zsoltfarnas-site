import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  className = '', 
  children,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default for hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      if (onClick) onClick();

      // Smooth scroll to the target section
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For normal links (like /contact.html), do not prevent default
  };

  return (
    <a 
      href={href} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </a>
  );
};