import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

import { logout } from './actions'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "sociALF",
    description: "the first real social network made for you",
};


export default async function RootLayout({ children }) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    

    let rightDiv;
    if (error || !data?.user) {
        rightDiv = <>
            <p>disconnected</p>
        </>
    } else {
        rightDiv = <>
            <h4>{data.user.email}</h4>
            <form action={logout}><button type='submit'>Logout</button></form>
        </>
    }

    return (
        <html lang="en">
            <body className={inter.className}>
                <div id='navDIV'>
                    <Link href='/'>Feed</Link>
                    <Link href='/p'>Profile</Link>
                </div>

                <div id='contentDIV'>{children}</div>

                <div id='rightDIV'>{rightDiv}</div>
            </body>
        </html >
    );
}
