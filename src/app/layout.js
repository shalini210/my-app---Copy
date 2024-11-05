import Footer1 from "@/components/Footer1";
import Header from "@/components/Header";
import Webheader from "@/components/Webheader";
// import Menu from "@/components/Menu";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio App",
  description: "Generated by Shalini Rathore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="https://gist.github.com/johnpolacek/c7ddd607a4d5dbf43f38ae7266f6de18.js"></script> */}
      <body className={inter.className}>
      <Webheader></Webheader>
        {children}
   
        <Footer1></Footer1>
   
      </body>
     
    </html>
  );
}
