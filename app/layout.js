import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Saketh Automobiles | Maruti Suzuki Arena",
  description: "Experience the perfect blend of style, cutting-edge performance, and unmatched efficiency. Begin your journey with Saketh Automobiles today. Book a test drive or service online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
