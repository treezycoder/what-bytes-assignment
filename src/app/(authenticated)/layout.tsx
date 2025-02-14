"use client";
import Header from "@/components/molecules/header";
import Nav from "@/components/organism/nav";
import MobileNav from "@/components/organism/nav/mobile";
import { GlobalProvider } from "@/context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      <main className={`w-full font-sans relative pt-[100px] antialiased`}>
        <Header />
        <div className="w-full relative flex ">
          <aside className="hidden pr-1 lg:flex overflow-hidden border-r-2  flex-col justify-start gap-4 pt-4  bg-white fixed z-1 h-screen">
            <Nav />
          </aside>
          {/* mobile nav */}
          <MobileNav />
          <div className="py-6 lg:ml-[200px] pl-4 pr-2 flex-1">{children}</div>
        </div>
      </main>
    </GlobalProvider>
  );
}
