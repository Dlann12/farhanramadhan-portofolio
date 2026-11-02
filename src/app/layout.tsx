import type { Metadata } from "next";
import { Anton, Archivo, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Farhan Ramadhan | Fotografer, Video Editor & Visual Storyteller",
  description: "Portofolio visual Farhan Ramadhan, S.I.Kom. Fotografer, video editor short-form (Reels/TikTok), dan visual media specialist berpengalaman di bidang kehumasan serta publikasi digital instansi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${anton.variable} ${archivo.variable} ${mrsSaintDelafield.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090607] text-[#f5f5f7] font-sans antialiased selection:bg-[#c81e28] selection:text-white">
        {children}
      </body>
    </html>
  );
}
