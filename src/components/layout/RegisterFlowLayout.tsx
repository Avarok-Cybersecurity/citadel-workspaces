import React from 'react';

interface RegisterFlowLayoutProps {
  children: React.ReactNode;
}

export const RegisterFlowLayout = ({ children }: RegisterFlowLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {children}
    </div>
  );
};