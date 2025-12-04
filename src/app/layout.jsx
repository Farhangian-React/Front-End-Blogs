import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvier from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="light-mode ">
      <body className={`min-h-screen  ${vazirFont.variable} font-sans`}>
        <Toaster />
        <ReactQueryProvider>
          <AuthProvier>{children}</AuthProvier>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
