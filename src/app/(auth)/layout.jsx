
export default function RootLayout({ children }) {
  return (
    <div dir="rtl" className="flex items-center justify-center min-h-screen 
    md:bg-gradient-to-b md:from-[#ebe2d9] md:via-[#ced6c8] md:to-[#ebe2d9] 
     bg-gradient-to-b from-[#494848] via-[#d8f4c2] to-[#605f5e]" >
      {children}
    </div>
  );
}
