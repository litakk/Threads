import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threads",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased w-full min-h-screen`}>
        
          <main>
              {children}
          </main>

      </body>
    </html>
  );
}
