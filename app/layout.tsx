import Navbar from "./components/navbar";
import { AuthProvider } from "./context/AuthContext";
import { UIProvider } from "./context/UIContext";
import "./globals.css";

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
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
