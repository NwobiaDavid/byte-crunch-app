import RegisterModal from "./components/Modals/RegisterModal";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Byte & Crunch",
  description: "Byte & Crunch is an e-commerce store for foods",
};

const font = Lexend_Deca({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <StateContext>
          <Toaster />
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          {children}
        </StateContext>
      </body>
    </html>
  );
}
