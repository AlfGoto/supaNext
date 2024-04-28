import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "sociALF",
    description: "the first real social network made for you",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div id='navDIV'>
                    <Link href='/'>Feed</Link>
                    <Link href='/p'>Profile</Link>
                </div>

                <div id='contentDIV'>{children}</div>
                
                <div id='rightDIV'>
                    
                </div>
            </body>
        </html>
    );
}
