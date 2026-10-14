import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "Saketh Automobiles | Maruti Suzuki Arena",
  description: "Experience the perfect blend of style, cutting-edge performance, and unmatched efficiency. Begin your journey with Saketh Automobiles today. Book a test drive or service online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
