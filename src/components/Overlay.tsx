import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const Overlay: React.FC<Props> = ({ children }) => {
  return <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      background: "rgba(0, 0, 0, 0.7)",
      backdropFilter: "blur(10px)",
      zIndex: "3",
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {children}
  </div>;
};