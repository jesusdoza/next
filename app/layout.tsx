import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider, RedirectToSignIn } from "@clerk/nextjs";

import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Repair Reports Application",
  description: "Reports database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up">
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
