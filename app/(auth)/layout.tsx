import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-300 flex items-center justify-center align-middle h-full">
      {children}
    </div>
  );
}
