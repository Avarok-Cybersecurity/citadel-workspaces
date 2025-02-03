import React from 'react';

interface RegisterFlowLayoutProps {
  children: React.ReactNode;
}

export const RegisterFlowLayout = ({ children }: RegisterFlowLayoutProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
      {children}
    </div>
  );
};