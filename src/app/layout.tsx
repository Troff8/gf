import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "@/app/styles/globals.css";
import SessionProvider from "@/app/components/sessionProvider/sessionProvider";
import { getServerSession } from "next-auth";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Glassfrog casino",
  description: "CS GO roulette",
  icons: [
    {
      url: "/icon.png",
      href: "/icon.png",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
