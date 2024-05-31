import type { CSSProperties, ReactNode } from 'react';
import React from 'react';

interface IBackgroundProps {
  children: ReactNode;
  color: string;
  style?: CSSProperties;
}
const Background = (props: IBackgroundProps) => (
  <div style={{ backgroundColor: props.color }}>{props.children}</div>
);

export { Background };
