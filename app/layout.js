// import
import { inter } from "./ui/fonts";
import "./ui/globals.css";
import { DataContextProvider } from "@/context/dataContext";

import { Footer } from "@/components/footer";

export const metadata = {
  title: "Clínicos Autoagendamiento",
  description: "Autoagendamiento de salud ocupacional Ecopetrol Clínicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <DataContextProvider>{children}</DataContextProvider>
        <Footer />
      </body>
    </html>
  );
}
