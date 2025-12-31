import Navbar from "./components/navbar";
import { AuthProvider } from "./context/AuthContext";
import { UIProvider } from "./context/UIContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UIProvider>
            <Navbar />
            {children}
            <Toaster position="top-right" />
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
