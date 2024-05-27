// components/AnimatedLink.tsx
import NextLink from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
};

export default AnimatedLink;
