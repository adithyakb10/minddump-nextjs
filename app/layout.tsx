import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import { options } from "./api/auth/[...nextauth]/options";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MindDump",
  description: "A place where you can share your thoughts and worries.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  return (
    <html className="bg-black text-white" lang="en">
      <body>
        <SessionProvider session={session}>
          <main className={poppins.className}>
            <NavBar />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
