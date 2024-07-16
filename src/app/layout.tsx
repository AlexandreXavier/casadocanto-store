import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Inter } from "next/font/google";
import { CSPostHogProvider } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loja Casa do Canto",
  description: "Comercializar produtos da casa do canto",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CSPostHogProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={inter.className}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
    </CSPostHogProvider>
  );
}
