import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};
export const Link = ({ children, href }: Props) => {
  return (
    <a
      className="text-blue"
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
};
