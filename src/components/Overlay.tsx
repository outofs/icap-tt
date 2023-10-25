import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const Overlay: React.FC<Props> = ({ children }) => {
  return <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display:"flex",
      background:"rgba(0, 0, 0, 0.5)",
      zIndex: "3"
    }}>
    {children}
  </div>
};