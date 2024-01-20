import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider, RedirectToSignIn } from "@clerk/nextjs";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
      <html
        lang="en"
        suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // forcedTheme="dark"
            enableSystem={false}
            storageKey="repair-next-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
