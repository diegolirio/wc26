import type { ReactNode } from "react";

export const metadata = {
  title: "wc26 web",
  description: "Next.js workspace for wc26"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
