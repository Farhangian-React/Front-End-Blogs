export const metadata = {
  title: "Auth",
  description: "Auth",
};

export default function RootLayout({ children }) {
  return (
    <div dir="rtl" className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#ebe2d9] via-[#ced6c8] to-[#ebe2d9]" >
      {children}
    </div>
  );
}
