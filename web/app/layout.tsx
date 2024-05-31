

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import LogListener from "../components/log-listener";

const inter = Inter({ subsets: ["latin"] });
console.log("Database HOST", process.env.POSTGRES_HOST);
console.log("Message HOST", process.env.RABBITMQ_DEFAULT_HOST);

export const metadata: Metadata = {
  title: "CAT Dept",
  description: "Created by Leroy Salih",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={`${inter.className} text-grey-600 bg-slate-100`}>
      <div className="min-h-[100px] text-skin-inverted text-4xl flex items-center pl-5
            bg-slate-700 text-white
            font-roboto-condensed
        ">
            Commerce and Technology Dept
        </div>
        <div className="flex flex-col place-content-center w-100 grid-cols-1 gap-4 md:grid md:grid-cols-12">
        <div className="min-h-[100px] rounded-lg bg-slate-300 shadow  m-2 p-4
                        md:block md:col-span-2
            ">
                <Sidebar/>
                <LogListener />
        </div>
        <div className="min-h-[100px] rounded-lg bg-white shadow text-slate-700 m-2 
                md:col-span-10
                truncate
                ">
                <div className="m-4 p-4">
                {children}
                </div>
                
            </div>
        </div>
        
      </body>
    </html>
    
  );
}
