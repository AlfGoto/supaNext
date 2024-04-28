import { updateSession } from '@/utils/supabase/middleware'
import { NextResponse } from "next/server";
import { createClient } from '@/utils/supabase/server'

export async function middleware(request) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    if(error){
        if(!request.url.includes('/log')){
            return NextResponse.redirect(new URL('/log', request.url))
        }
    }

    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}