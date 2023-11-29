import { Roboto } from 'next/font/google'
import './globals.css'
import Footer from '@/Components/Layout/Footer';
import Header from '@/Components/Layout/Header';

const roboto = Roboto({ subsets: ['latin'], weight:['100','300','400','500','700'] })

export const metadata = {
  title: "La Boucherie",
  description: "Biggest Food Ordering App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
